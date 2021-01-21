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