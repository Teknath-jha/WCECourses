import os
from django.contrib.auth import authenticate, login, logout
from django.views import generic
from django.views.generic.base import View
from django.contrib.auth.models import Group
from django.contrib.auth.models import User
from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.views.generic.base import View
from student.models import student as Student
from django.contrib.auth.hashers import check_password
#from django.contrib.auth import views as auth_views
from django.contrib.auth.hashers import check_password

class landingPage(View):
    
    def get(self, request, template_name='landingPage.html'):
        return render(request, template_name)

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
        return render(request, template_name, err)

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
        err = {}
        err["error_message"]= "Password Changed Successfully."
        return render(request, template_name, err)