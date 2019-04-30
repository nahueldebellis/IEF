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
        return render(request, 'login/login.html', {'form': form, 'action': '/welcome/register/'})

    def post(self, request):
        #body_unicode = request.body.decode('utf-8')
        #body_data = json.loads(body_unicode)
        user = Users(firstname=request.POST['firstname'], lastname=request.POST['lastname'], age=request.POST['age'], dni=request.POST['dni'], email=request.POST['email'], bio=request.POST['bio'], username=request.POST['username'], password=request.POST['password'])

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
        return render(request, 'login/login.html', {'form': form, 'action': '/welcome/login/'})

    def post(self, request):
        try:
            user = Users.objects.get(username=request.POST['username'], password=request.POST['password'])
            return HttpResponse('Existe')
        except:
            return HttpResponse('Error, user not register')