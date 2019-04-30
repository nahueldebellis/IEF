from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import HttpResponse
from django.views import View
from .models import Users
from .forms import RegisterForm, LoginForm
import json

# Create your views here.
class Register(View):
    def get(self, request):
        form = RegisterForm()
        return render(request, 'login/Index_Register.html')

    def post(self, request):
        #body_unicode = request.body.decode('utf-8')
        #body_data = json.loads(body_unicode)
        user = Users(firstname=request.POST['name'], lastname=request.POST['lname'], 
                     dni=request.POST['dni'], email=request.POST['email'], bio=request.POST['bio'], 
                     password=request.POST['password'], sex=request.POST['sexo'],
                     phone=request.POST['tel'], cuil=request.POST['cuil'], address=request.POST['dir'], 
                     country=request.POST['country'], province=request.POST['prov'], location=request.POST['loc'], 
                     cp=request.POST['cp'], interest=request.POST['interest'])

        user.save()

        #email = EmailMessage('title', 'body', to=[email])
        #email.send()
        return HttpResponse('registrado')

class Confirmation(View):
    def post(self, request):
        pass

class Login(View):
    def get(self, request):
        form = LoginForm()
        return render(request, 'login/Index_Login.html', {'form': form, 'action': '/welcome/login/'})

    def post(self, request):
        try:
            user = Users.objects.get(email=request.POST['email'], password=request.POST['password'])
            return HttpResponse('Existe')
        except:
            return HttpResponse('Error, user not register')