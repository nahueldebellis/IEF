from django.db import models

# Create your models here.
class Users(models.Model):
    firstname = models.CharField(max_length=20, default='nan')
    lastname = models.CharField(max_length=20, default='nan')
    confirmation = models.BooleanField(default=False)
    age = models.IntegerField(default=10)
    dni = models.IntegerField(default=123)
    sex = models.CharField(max_length=10, default='nan')
    studies = models.CharField(max_length=20, default='nan')
    email = models.CharField(max_length=20, default='nan')
    bio = models.CharField(max_length=200, default='nan')
    username = models.CharField(max_length=10, default='nan')
    password = models.CharField(max_length=20, default='nan')
    def __str__(self):
        return '%s %s' % (self.firstname, self.lastname)