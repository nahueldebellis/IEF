from django import forms  
from .models import Users

class RegisterForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ('firstname', 'lastname', 'age', 'email', 'username', 'password', 'dni', 'bio',)

class LoginForm(forms.ModelForm):
    class Meta:
        model = Users
        fields = ('username', 'password',)
    