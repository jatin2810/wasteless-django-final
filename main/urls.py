from django.urls import path,include
from . import views

app_name = 'main'

urlpatterns = [
    path('',views.indexview,name='index'),
    path('about',views.aboutusview,name='about'),
    path('contact',views.contactview,name='contact'),
    path('buy',views.buyview,name='buy'),
    path('productdescription/<int:pk>',views.productview,name='product'),
    path('seller',views.sellerview,name='seller'),
    path('donate',views.donateview,name='donate'),
    path('recycle',views.recycleview,name='recycle'),
    path('funds',views.fundsview,name='funds'),
    path('goods',views.goodsview,name='goods'),
    path('userprofile',views.userprofileview,name='userprofile'),
    path('delete/<int:pk>',views.deleteview,name='delete'),

]
