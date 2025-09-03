import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBinding } from './components/data-binding/data-binding';
import {  } from '@angular/common';
import { NgClass } from './components/ng-class/ng-class';
import { ControlStatement } from './components/control-statement/control-statement';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        component:Admin
    },
    {
        path: 'dataBinding',
        component: DataBinding
    },
    {
        path: 'ng-class',
        component: NgClass
    },
    {
        path:'control-flow',
        component: ControlStatement
    }
    
];
