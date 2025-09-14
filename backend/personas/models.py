from django.db import models

class PersonaResult(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    persona = models.CharField(max_length=100)  # store persona.titleEN or persona.id
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.persona}"
