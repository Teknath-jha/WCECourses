# Generated by Django 3.1.5 on 2021-01-27 12:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0004_auto_20210127_1727'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='phoneNumber',
            field=models.IntegerField(default=123456789),
        ),
    ]
