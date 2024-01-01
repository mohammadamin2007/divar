import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsMainComponent} from "./components/products-main/products-main.component";

let routes: Routes = [
    {path: "", component: ProductsMainComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRouterModule {}
