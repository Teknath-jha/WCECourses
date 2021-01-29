from django.contrib import admin

# Register your models here.
from .models import student, enrolledStudent

admin.site.register(student)
admin.site.register(enrolledStudent)