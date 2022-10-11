from django.urls import path
from .views import TemplateModelView

urlpatterns = [
    path('get/datos', TemplateModelView.as_view(),name='datos_list'),
    path('get/datos/<int:id>', TemplateModelView.as_view(),name='datos_detail'),
    path('post/datos', TemplateModelView.as_view(),name='datos_create'),
    path('update/datos/<int:id>', TemplateModelView.as_view(),name='datos_update'),
    path('delete/datos/<int:id>', TemplateModelView.as_view(),name='datos_delete'),

]