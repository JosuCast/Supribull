from django.http import JsonResponse
from django.shortcuts import render
from django.views import View
import json
from .models import TemplateModel
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class TemplateModelView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    def get(self, request,id=0):
        if id > 0:
            datos = list(TemplateModel.objects.filter(id=id).values())
            if len(datos) > 0:
                dato = datos[0]
                context = {'message': "Success", 'data': dato}
            else:
                context = {'message': "Company not found..."}
            return JsonResponse(context)
        else:
            datos = list(TemplateModel.objects.values())
            if len(datos) > 0:
                context = {'message': "Success", 'data': datos}
            else:
                context = {'message': "Companies not found..."}
            return JsonResponse(context)

    def post(self, request):
        data = json.loads(request.body)
        if data:
            TemplateModel.objects.create(title=data['title'], template=data['template'])
            context = {'message': 'Success'}
        else:
            context = {'message': 'No data found'}
        return JsonResponse(context)
    def put(self, request,id):
        jd = json.loads(request.body)
        dato = list(TemplateModel.objects.filter(id=id).values())
        if len(dato) > 0:
            updates = TemplateModel.objects.get(id=id)
            updates.title=jd['title'] 
            updates.template=jd['template']
            updates.save()
            context = {'message': "Success"}
        else:
            context = {'message': "Data not found..."}
        return JsonResponse(context)

    def delete(self, request,id):
        data = list(TemplateModel.objects.filter(id=id).values())
        if len(data) > 0:
            TemplateModel.objects.filter(id=id).delete()
            context = {'message': "Success"}
        else:
            context = {'message': "Data not found..."}
        return JsonResponse(context)