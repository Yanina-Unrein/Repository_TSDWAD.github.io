# Generated by Django 4.2.1 on 2023-05-17 22:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MedioPago',
            fields=[
                ('id_pagos', models.AutoField(primary_key=True, serialize=False)),
                ('tipo', models.CharField(max_length=50)),
                ('descripcion', models.TextField()),
            ],
        ),
    ]
