from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.views import View
from .models import Users

import hashlib
import json

# Create your views here.
class Register(View):
    def get(self, request):
        return render(request, 'login/Index_Register.html')

    def post(self, request):
        try:
            hash_pass = hashlib.new("sha1", b"%s" % (request.POST['password']))
            user = Users(
                firstname=request.POST['name'], lastname=request.POST['lname'], 
                dni=request.POST['dni'], email=request.POST['email'], 
                bio=request.POST['bio'], password=hash_pass, sex=request.POST['sexo'],
                phone=request.POST['tel'], cuil=request.POST['cuil'], 
                address=request.POST['dir'], country=request.POST['country'], 
                province=request.POST['prov'], location=request.POST['loc'], 
                cp=request.POST['cp'], interest=request.POST['interest']
            )
            user.save()
            return redirect('/welcome/login/')
        except:
            return HttpResponse(status=500)

class Confirmation(View):
    def post(self, request):
        pass

class Login(View):
    def get(self, request):
        try:
            if(request.session.get('user_session', 'none') != 'none'):
                return HttpResponse('Perfil')
            else:
                return render(request, 'login/Index_Login.html', {'action': '/welcome/login/'})
        except:
            return HttpResponse(status=500)

    def post(self, request):
        try:
            user = Users.objects.get(email=request.POST['email'], password=request.POST['password'])
            hash_user = hashlib.new("sha1", b"%s" % (user.id))
            request.session['user_session'] = hash_user
            return render(request, 'Perfil')
        except:
            return render(request, 'Error, user not register')