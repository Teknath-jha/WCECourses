import os
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.views import generic
from django.views.generic.base import View
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.views.generic.base import View
from student.models import student as Student
from student.models import enrolledStudent
from django.contrib.auth.hashers import check_password
#from django.contrib.auth import views as auth_views
from django.contrib.auth.hashers import check_password
import razorpay
import shortuuid
sam = "e6am76KiAsQyUO8"
veda = "sZYE2N39B"
client = razorpay.Client(auth=("rzp_test_7fzGeMVYeIW8M6", sam+veda))

class landingPage(View):
    
    def get(self, request, template_name='landingPage.html'):
        try:
            stud = Student.objects.filter(user = request.user)
            stud = stud[0]
            message={'message':'message'}
            if (stud.PaidAttendenceCertificateDL or stud.PaidAttendenceDL)  and  (stud.PaidAttendencePython   or stud.PaidAttendenceCertificatePython):
                    message['message']= 'PyandDL'
            elif (stud.PaidAttendenceCertificateDL or stud.PaidAttendenceDL) :
                    message['message']= 'DL'
            elif (stud.PaidAttendencePython   or stud.PaidAttendenceCertificatePython):
                    message['message']= 'python'
            else :
                message['message']= 'nothing'
        except:
            message={'message':'message'}
            message['message']= 'nothing'
        return render(request, template_name, message)

class register(View):

    def get(self, request, template_name='register.html'):
        return render(request, template_name)

    def post(self, request, template_name='register.html'):
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        designation = request.POST.get('designation')
        organisation = request.POST.get('organisation')
        address = request.POST.get('address')
        phoneNumber = request.POST.get('phoneNumber')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confPassword = request.POST.get('conf_password')

        if password != confPassword:
            err = {'error_message': "Password don't match. Please Try Again."}
            return render(request, 'register.html', err)

        try:
            user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name,
                                            last_name=last_name)
            user.save()
        except:
            err = {}
            err['error_message'] = "Account with this Username or Email already exists."
            return render(request, template_name, err)

        try:
            studentData = Student(user=user, designation=designation, organisation=organisation, address=address, phoneNumber=phoneNumber)
            studentData.save()
        except:
            err = {}
            err['error_message'] = "Account with this Username already exists."
            return render(request, template_name, err)

        my_group = Group.objects.get(name='student_group')
        my_group.user_set.add(user)

        err = {}
        err['error_message'] = "Registration Successful. Please Login."
        return render(request, template_name,err)

class Login(View):

    def get(self, request, template_name='login.html'):
        return render(request, template_name)

    def post(self, request, template_name='login.html'):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        group = None
        if user is not None:
            login(request, user)
            userr = Group.objects.filter(user=user)
            group = user.groups.all()[0].name
            if group == 'student_group':
                return redirect('landingPage')
            elif group == 'faculty_group':
                return redirect('facultyLandingPage')
            else:
                return render(request, 'landingPage.html', {})
        else:
            return render(request, 'login.html', {'error_message': 'Invalid login'})
        return render(request, 'login.html')

def logout_user(request):
    logout(request)
    return redirect('landingPage')

class profile(View):

    def get(self, request, template_name='profile.html'):
        stud = Student.objects.filter(user = request.user)
        stud = stud[0]
        err = {}
        err["student"] = stud
        return render(request, template_name, err)

    def post(self, request, template_name='profile.html'):
        username = request.POST.get('username')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        designation = request.POST.get('designation')
        organisation = request.POST.get('organisation')
        address = request.POST.get('address')
        phoneNumber = request.POST.get('phoneNumber')
        email = request.POST.get('email')

        studentData = Student.objects.filter(user=request.user)
        studentData = studentData[0]
        organisation = organisation.rstrip()
        organisation = organisation.lstrip()
        address = address.rstrip()
        address = address.lstrip()
        phoneNumber = phoneNumber.rstrip()
        phoneNumber = phoneNumber.lstrip()

        if organisation == "":
            organisation = studentData.organisation
        if address == "":
            address = studentData.address
        if phoneNumber == "":
            phoneNumber = studentData.phoneNumber

        # Update the Fields
        try:
            Student.objects.filter(user=request.user).update(organisation=organisation, address=address, phoneNumber=phoneNumber)
        except:
            err = {}
            err["error_message"] = "Some Error Occurred. Please Try Again."
            return render(request, template_name, err)
        
        stud = Student.objects.filter(user = request.user)
        stud = stud[0]
        err = {}
        err["student"] = stud
        err["error_message"] = "Changes Saved Successfully."
        return render(request, template_name, err)

class changePassword(View):

    def get(self, request, template_name = "changepassword.html"):
        return render(request, template_name)

    def post(self, request, template_name = "changepassword.html"):
        currPassword = request.POST.get('currentPassword')
        newPassword = request.POST.get('newPassword')
        confPassword = request.POST.get('reNewPassword')

        try:
            matchcheck= check_password(currPassword, request.user.password)
            if matchcheck is False:
                err = {}
                err["error_message"]= "Entered Current Password is Incorrect. Please Retry."
                return render(request, template_name, err)
            if newPassword != confPassword:
                err = {}
                err["error_message"]= "Entered New Passwords don't Match. Please Retry."
                return render(request, template_name, err)
        except:
            err = {}
            err["error_message"]= "Refresh the Page to change the Password Again."
            return render(request, template_name, err)

        U=User.objects.get(username=request.user.username)
        U.set_password(newPassword)
        U.save()
        update_session_auth_hash(request,U)
        stud = Student.objects.filter(user = request.user)
        stud = stud[0]
        err = {}
        err["student"] = stud
        err["error_message"] = "Password changed successfully."
        return render(request, 'profile.html', err)
        

class pythonForEverybody(View):

    def get(self, request, template_name = 'pythonForEverybody.html'):
        message={'message':'message'}
        try:
            stud = Student.objects.filter(user = request.user)
            stud =stud[0]
            if stud.PaidAttendencePython is True:
                message['message']='Enrolled without certification'
            elif stud.PaidAttendenceCertificatePython is True:
                message['message']='Enrolled for certification'
            else:
                message['message']='Enroll'
        except:
            message['message']='Login to Enroll'
        return render(request, template_name,message)



class about(View):
    def get(self, request, template_name = 'about.html'):
        return render(request, template_name)

class deepLearning(View):
    def get(self, request, template_name = 'deepLearning.html'):    
        message={'message':'message'}
        try:
            stud = Student.objects.filter(user = request.user)
            stud =stud[0]
            if stud.PaidAttendenceDL is True:
                message['message']='Enrolled without certification'
            elif stud.PaidAttendenceCertificateDL is True:
                message['message']='Enrolled for certification'
            else:
                message['message']='Enroll'
        except:
            message['message']='Login to Enroll'
        return render(request, template_name, message)

class enrollPython(View):

    def get(self,request,template_name='summaryPython.html'):
        stud = Student.objects.filter(user = request.user)
        stud =stud[0]
        err = {}
        err["student"] = stud
        return render(request,template_name, err)
    
    def post(self,request,template_name='summaryPython.html'):
        enrollType=request.POST.get('enrollType')
        DATA ={}
        stud = Student.objects.filter( user= request.user)
        stud =stud[0]
        if enrollType == '1':
            DATA["amount"]=150000
        else:
            DATA["amount"]=200000
        DATA["currency"]="INR"
        DATA["payment_capture"]=1
        payment = client.order.create(data=DATA)

        return render(request, template_name,{'student':stud,'payment':payment,'type':enrollType})

from django.views.decorators.csrf import csrf_exempt 

class successPython(View):
    @csrf_exempt
    def post(self, request):
        print(request.POST)
        err = {}
        orderID = request.POST.get('razorpay_order_id')
        paymentID = request.POST.get('razorpay_payment_id')
        enrollmentType = request.POST.get('enrollmentType')
        signature = request.POST.get('razorpay_signature')
        if enrollmentType == '1':
            Student.objects.filter(user=request.user).update(PaidAttendencePython = True)
            stud = Student.objects.filter(user=request.user)
            stud =stud[0]
            enstud = enrolledStudent(enrolled_stud=stud,Amount='1500',OrderId=orderID,PaymentId=paymentID,Signature=signature)
            enrollType = "Python for Everybody: Attendence"
        else:
            Student.objects.filter(user=request.user).update(PaidAttendenceCertificatePython = True)
            stud = Student.objects.filter(user=request.user)
            stud =stud[0]
            enstud = enrolledStudent(enrolled_stud=stud,Amount='2000',OrderId=orderID,PaymentId=paymentID,Signature=signature)
            enrollType = "Python for Everybody: Attendence + Certificate"
        enstud.save()
        err["orderID"] = orderID
        err["paymentID"] = paymentID
        err["enrollType"] = enrollType
        return render(request, 'successPython.html', err)

class enrollDL(View):

    def get(self,request,template_name='summaryDL.html'):
        stud = Student.objects.filter(user = request.user)
        stud =stud[0]
        err = {}
        err["student"] = stud
        return render(request,template_name, err)
    
    def post(self,request,template_name='summaryDL.html'):
        enrollType=request.POST.get('enrollType')
        DATA = {}
        stud = Student.objects.filter(user = request.user)
        stud =stud[0]
        if enrollType == '1':
            DATA["amount"] = 250000
        else:
            DATA["amount"] = 300000

        DATA["currency"] = "INR"
        DATA["payment_capture"] = 1

        payment = client.order.create(data=DATA)

        stud = Student.objects.filter(user = request.user)
        stud =stud[0]
        
        return render(request, template_name, {"payment": payment, "student": stud, "type": enrollType})

from django.views.decorators.csrf import csrf_exempt 

class successDL(View):
    @csrf_exempt
    def post(self, request):
        print(request.POST)
        err = {}
        orderID = request.POST.get('razorpay_order_id')
        paymentID = request.POST.get('razorpay_payment_id')
        enrollmentType = request.POST.get('enrollmentType')
        signature = request.POST.get('razorpay_signature')
        if enrollmentType == '1':
            Student.objects.filter(user=request.user).update(PaidAttendenceDL = True)
            stud = Student.objects.filter(user=request.user)
            stud =stud[0]
            enstud = enrolledStudent(enrolled_stud=stud,Amount='2500',OrderId=orderID,PaymentId=paymentID,Signature=signature)
            enrollType = "Deep Learning: Attendence"
        else:
            Student.objects.filter(user=request.user).update(PaidAttendenceCertificateDL = True)
            stud = Student.objects.filter(user=request.user)
            stud =stud[0]
            enstud = enrolledStudent(enrolled_stud=stud,Amount='3000',OrderId=orderID,PaymentId=paymentID,Signature=signature)
            enrollType = "Deep Learning: Attendence + Certificate"
        enstud.save()
        err["orderID"] = orderID
        err["paymentID"] = paymentID
        err["enrollType"] = enrollType
        return render(request, 'successDL.html', err)
        
def isFaculty(group_name):
    if group_name == 'faculty_group':
        return 1
    else:
        return 0

class facultyLandingPage(View):
    def get(self, request, template_name="facultyLandingPage.html"):
        try:
            group = request.user.groups.all()[0].name
            if isFaculty(group) == 0:
                return render(request, 'login.html')
            return render(request, template_name)
        except:
            return render(request, 'login.html')

class enrollListPython(View):
    def get(self, request, template_name="enrollListPython.html"):
        try:
            group = request.user.groups.all()[0].name
            if isFaculty(group) == 0:
                return render(request, 'login.html')
            else:
                enrollList ={}
                enrollList['attend']= Student.objects.filter(PaidAttendencePython=True)
                enrollList['certificate'] = Student.objects.filter(PaidAttendenceCertificatePython=True)
            return render(request, template_name,enrollList)
        except:
            return render(request, 'login.html')

class enrollListDL(View):
    def get(self, request, template_name="enrollListDL.html"):
        try:
            group = request.user.groups.all()[0].name
            if isFaculty(group) == 0:
                return render(request, 'login.html')
            else:
                enrollList ={}
                enrollList['attend']= Student.objects.filter(PaidAttendenceDL=True)
                enrollList['certificate'] = Student.objects.filter(PaidAttendenceCertificateDL=True)
            return render(request, template_name,enrollList)
        except:
            return render(request, 'login.html')

class paymentDetailsPy(View):
    def get(self,request,stud,template_name="paymentDetailsPy.html"):
        thatStud = User.objects.filter(email = stud)
        thatStud = thatStud[0]
        thatStud = Student.objects.filter(user=thatStud)
        thatStud = thatStud[0]
        enrolled_stud = enrolledStudent.objects.filter(enrolled_stud=thatStud)
        for i in enrolled_stud:
            if i.Amount=="1500" or i.Amount=="2000":
                student=i
        enroll_details={}
        enroll_details['student']=student
        return render(request,template_name, enroll_details)

class paymentDetailsDL(View):
    def get(self,request,stud,template_name="paymentDetailsDL.html"):
        thatStud = User.objects.filter(email = stud)
        thatStud = thatStud[0]
        thatStud = Student.objects.filter(user=thatStud)
        thatStud = thatStud[0]
        enrolled_stud = enrolledStudent.objects.filter(enrolled_stud=thatStud)
        for i in enrolled_stud:
            if i.Amount=="2500" or i.Amount=="3000":
                student=i
        enroll_details={}
        enroll_details['student']=student
        return render(request,template_name, enroll_details)
