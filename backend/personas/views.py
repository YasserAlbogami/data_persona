from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import PersonaResult
from .serializers import PersonaResultSerializer

from django.views.decorators.csrf import csrf_exempt

# 🚀 Disable CSRF for local dev
@csrf_exempt
@api_view(['POST'])
def save_persona(request):
    print("Request data:", request.data)  # debug

    email = request.data.get('email')
    if not email:
        return Response({'error': 'Email is required'}, status=status.HTTP_400_BAD_REQUEST)

    # ✅ Check if email already exists
    if PersonaResult.objects.filter(email=email).exists():
        print(f"Record with email '{email}' already exists. Skipping insert.")
        return Response(
            {'message': f"Record with email '{email}' already exists. Skipped."},
            status=status.HTTP_200_OK
        )

    serializer = PersonaResultSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Persona saved successfully!'}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
