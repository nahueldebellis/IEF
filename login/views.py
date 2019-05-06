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
        user_exist = Users.objects.get(email=request.POST['email'])
        hash_pass = hashlib.new("sha1", b"%s" % (request.POST['password']))
        if not user_exist:
            user = Users(
                firstname=request.POST['name'], lastname=request.POST['lname'], 
                dni=request.POST['dni'], email=request.POST['email'], bio=request.POST['bio'], 
                password=hash_pass, sex=request.POST['sexo'],
                phone=request.POST['tel'], cuil=request.POST['cuil'], address=request.POST['dir'], 
                country=request.POST['country'], province=request.POST['prov'], location=request.POST['loc'], 
                cp=request.POST['cp'], interest=request.POST['interest']
            )

            user.save()

        #email = EmailMessage('title', 'body', to=[email])
        #email.send()
            return redirect('/welcome/login/')
        else:
            return render(request, 'login/Index_Register.html', {'error': 'El email ya esta en uso'})


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
