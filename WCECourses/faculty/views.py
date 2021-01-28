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
from django.contrib.auth.hashers import check_password
#from django.contrib.auth import views as auth_views
from django.contrib.auth.hashers import check_password

# Create your views here.

def isFaculty(group_name):
    if group_name == 'faculty_group':
        return 1
    else:
        return 0

class facultyLandingPage(View):
    def get(self, request, template_name="facultyLandingPage.html"):
        group = request.user.groups.all()[0].name
        if isFaculty(group) == 0:
            return render(request, 'login.html')
        return render(request, template_name)