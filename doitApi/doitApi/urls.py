from django.contrib import admin
from django.urls import path, include                 
from rest_framework import routers                    
from doit import views                            

router = routers.DefaultRouter()                      # add this
router.register(r'todos', views.TodoView, 'todo')     # add this
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
]