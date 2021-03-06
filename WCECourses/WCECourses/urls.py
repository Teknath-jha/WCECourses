"""WCECourses URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.landingPage.as_view(), name="landingPage"),
    path('register', views.register.as_view(), name="register"),
    path('login', views.Login.as_view(), name="Login"),
    path('logout', views.logout_user, name='logout'),
    path('profile', views.profile.as_view(), name="profile"),
    path('changePassword', views.changePassword.as_view(), name="changePassword"),
    path('pythonForEverybody', views.pythonForEverybody.as_view(), name="pythonForEverybody"),
    path('about',views.about.as_view(),name="about"),
    path('deepLearning',views.deepLearning.as_view(),name="deepLearning"),
    path('enrollPython',views.enrollPython.as_view(),name="enrollPython"),
    path('enrollDL',views.enrollDL.as_view(),name="enrollDL"),
    path('facultyHome', views.facultyLandingPage.as_view(), name="facultyLandingPage"),
    path('enrollmentForPython', views.enrollListPython.as_view(), name="enrollListPython"),
    path('enrollmentForDL', views.enrollListDL.as_view(), name="enrollListDL"),
    path('successDL', views.successDL.as_view(), name="successDL"),
    path('successPython', views.successPython.as_view(), name="successPython"),
    path('paymentDetailsPy/<str:stud>', views.paymentDetailsPy.as_view(), name="paymentDetailsPy"),
   path('paymentDetailsDL/<str:stud>', views.paymentDetailsDL.as_view(), name="paymentDetailsDL"),
]
