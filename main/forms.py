from django import forms
from django.contrib.auth import authenticate
from .models import Product



class ProductForm(forms.ModelForm):
    image1=forms.ImageField()
    image2=forms.ImageField()
    image3=forms.ImageField()

    class Meta:
        model = Product
        fields='__all__'
