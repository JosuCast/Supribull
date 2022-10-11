from django.db import models

# Create your models here.

class TemplateModel(models.Model):
    title = models.CharField(max_length=50)
    template = models.TextField()