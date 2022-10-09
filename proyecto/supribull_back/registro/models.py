from django.db import models
from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class Alumno(AbstractBaseUser):
    idAlumno=models.IntegerField(primary_key=True)
    nombre=models.CharField('Nombre',max_length=100,blank=False,null=False)
    apellidopat=models.CharField('Apellido Paterno',max_length=100)
    apellidomat=models.CharField('Apellido Materno',max_length=100)
    correo=models.EmailField('Email',blank=False,null=False,unique=True)
    dni = models.IntegerField('Dni',blank=False,null=False)
    codigo_ins=models.IntegerField('Codigo Institucional',blank=False,null=False)

    USERNAME_FIELD = 'correo'
