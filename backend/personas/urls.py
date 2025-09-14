from django.urls import path
from .views import save_persona

urlpatterns = [
    path('save_persona/', save_persona, name='save_persona'),
]
