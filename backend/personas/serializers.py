from rest_framework import serializers
from .models import PersonaResult

class PersonaResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonaResult
        fields = ['id', 'name', 'email', 'persona', 'created_at']
