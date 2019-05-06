from django.db import models

# Create your models here.
class Users(models.Model):
    firstname = models.CharField(max_length=20, default='nan')
    lastname = models.CharField(max_length=20, default='nan')
    confirmation = models.BooleanField(default=False)
    age = models.IntegerField(default=10)
    dni = models.CharField(max_length=100, default='nan')
    sex = models.CharField(max_length=10, default='nan')
    studies = models.CharField(max_length=20, default='nan')
    email = models.CharField(max_length=20, default='nan')
    bio = models.CharField(max_length=200, default='nan')
    username = models.CharField(max_length=10, default='nan')
    password = models.CharField(max_length=200, default='nan')

    phone=models.CharField(max_length=100, default='nan')
    cuil=models.CharField(max_length=100, default='nan')
    address=models.CharField(max_length=100, default='nan')
    country=models.CharField(max_length=10, default='nan')
    province=models.CharField(max_length=15, default='nan')
    location=models.CharField(max_length=20, default='nan')
    cp=models.IntegerField(default=123)
    interest=models.CharField(max_length=20, default='nan')
    
    def __str__(self):
        return '%s %s' % (self.firstname, self.lastname)