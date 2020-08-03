from django.shortcuts import render,redirect
from django.contrib.auth.decorators import login_required
from .models import Product,Donate
from django.contrib.auth.models import User

# Create your views here.
def indexview(request):
    return render(request,'main/index.html')

def aboutusview(request):
    return render(request,'main/aboutus.html')

def contactview(request):
    return render(request,'main/contactus.html')

@login_required
def buyview(request):
	if request.method=='GET':
		products=Product.objects.all()
		return render(request,'main/buyer.html',{'products':products})

@login_required
def productview(request,pk):
	if request.method=='GET':
		product=Product.objects.filter(pk=pk).first()
		return render(request,'main/productdescription.html',{'product':product})

@login_required
def sellerview(request):
	if request.method=='GET':
		return render(request,'main/seller.html')
	else:
		seller=request.user
		name=request.POST.get('name')
		price=request.POST.get('price')
		description=request.POST.get('description')
		phone_number=request.POST.get('phone_number')
		category=request.POST.get('category')
		address=request.POST.get('address')
		product=Product.objects.create(seller=seller,name=name,price=price,phone_number=phone_number,description=description,
        								category=category,address=address)

		if 'image1' in request.FILES:
			image1=request.FILES['image1']
			product.image1=image1
		

		if 'image2' in request.FILES:
			image2=request.FILES['image2']
			product.image2=image2
			

		if 'image3' in request.FILES:
			image3=request.FILES['image3']
			product.image3=image3
			
		product.save()
	
		return redirect('/')





def donateview(request):
	 return render(request,'main/donate.html')


@login_required
def recycleview(request):
	if request.method=='GET':
		return render(request,'main/Recyclables.html')		
	
	else:
		donator=request.user
		quantity=request.POST.get('quantity')
		description=request.POST.get('description')
		phone_number=request.POST.get('phone_number')
		category=request.POST.get('category')
		address=request.POST.get('address')
		NGO='Prayaas'
		product=Donate.objects.create(donator=donator,quantity=quantity,phone_number=phone_number,description=description,
        								category=category,address=address,NGO=NGO)

		if 'image1' in request.FILES:
			image1=request.FILES['image1']
			product.image1=image1
		

		if 'image2' in request.FILES:
			image2=request.FILES['image2']
			product.image2=image2
			

		if 'image3' in request.FILES:
			image3=request.FILES['image3']
			product.image3=image3
			
		product.save()
		return redirect('/donate')

@login_required
def goodsview(request):
	if request.method=='GET':
		return render(request,'main/Goods.html')		
	
	else:
		donator=request.user
		quantity=request.POST.get('quantity')
		description=request.POST.get('description')
		phone_number=request.POST.get('phone_number')
		category=request.POST.get('category')
		address=request.POST.get('address')
		NGO=request.POST.get('NGO')
		product=Donate.objects.create(donator=donator,quantity=quantity,phone_number=phone_number,description=description,
        								category=category,address=address,NGO=NGO)

		if 'image1' in request.FILES:
			image1=request.FILES['image1']
			product.image1=image1
		
		if 'image2' in request.FILES:
			image2=request.FILES['image2']
			product.image2=image2
			
		if 'image3' in request.FILES:
			image3=request.FILES['image3']
			product.image3=image3
		product.save()
		return redirect('/donate')


def fundsview(request):
	 return render(request,'main/Funds.html')


@login_required
def userprofileview(request):
	if request.method=='GET':
		user=request.user
		products=Product.objects.filter(seller=user)
		return render(request,'main/userprofile.html',{'products':products,'user':user})


def deleteview(request,pk):
	if request.method=='POST':
		product=Product.objects.filter(pk=pk).first()
		product.delete()
		return redirect('/userprofile')
