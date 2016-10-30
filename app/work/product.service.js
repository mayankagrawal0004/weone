"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._productUrl = '/products.json';
        this._professionalurl = '/professional.json';
        this._itechUrl = '/tech.json';
    }
    ProductService.prototype.getDetails = function () {
        return [{
                "id": 1,
                "projecttype": "",
                "project": "OFFICE365",
                "projectyear": 2015,
                "projecttech": ["JavaScript", "AngularJS", "HTML", "CSS", "C#", "Janus", "MYSQL", "Selenium testing"],
                "projectDescrip": "The Office 365 service consists number of products and services. All of Office 365's components can be managed and configured through an online portal, users can be added to office 365 manually. Office 365 main features include Outlook, Microsoft office, Excel, Yammers and this are available in a different number of subscriptions which is aimed at different needs, segments and different price. For example, Personal, Home, Business, Enterprise.",
                "projectresponsiblity": ["Involved in application development for various office365 web applications using ASP.Net MVC / C# / SQL Server / AngularJS / AJAX / HTML / CSS",
                    "Version control for applications done using Microsoft Source Depo.",
                    "Create attractive UI using CSS, HTML, AngularJS.",
                    "Designed and implemented applications using .NET Framework 4.5.",
                    "Interacted with Clients on a weekly basis to gather requirements and involved in creating BRDs based",
                    "Creating Test cases ensuring that the developed software performs as detailed by the business requirements",
                    "Involved in maintenance of applications developed."]
            }, {
                "id": 2,
                "projecttype": "",
                "project": "OSP",
                "projectyear": 2016,
                "projecttech": ["JavaScript", "AngularJS", "HTML", "CSS", "C#", "Janus", "MYSQL"],
                "projectDescrip": "Office Service Pulse is company Internal website that will help to track the health of Office 365 products and services. Based on factors like availability, storage, region. OSP application consists of features like Escalation which is used to raise the alert and assign to developers. Health shows the performance of Office 365 products. OnCall have the details of engineers who are on call for a week for the associated office 365 products.",
                "projectresponsiblity": [
                    "Involved in database table design and writing stored procedures",
                    "Interacted with business analyst to understand the business requirements.",
                    "Application development, enhancements and maintenance using C#,",
                    "Design and Develop front end interface along with JavaScript / AngularJS /HTML / CSS",
                    "Implemented various Validation controls for client-side validation of Server Controls.",
                    "Provided technical guidance and support to end-users by developing documentations required.",
                    "Performed Unit Testing, Integration Testing and Regression Testing of the application.",
                    "Actively involved in Bug Fixing during the build and deployment process and debugging."
                ]
            }, {
                "id": 3,
                "projecttype": "",
                "project": "OMS",
                "projectyear": 2016,
                "projecttech": ["MySQL", "Mongo", "RUBY", "LINUX"],
                "projectDescrip": "Microsoft Operations Management Suite (OMS) is cloud-based IT management solution that will helps to protect and manage the cloud infrastructure. OMS can integrate with System Center components such as System Center Operations Manager to extend existing management investments into the cloud.",
                "projectresponsiblity": [
                    "Developing solutions for OMS Linux agent by creating Fluentd plugins",
                    "Plugins will read the logs from different services, parsing the logs into fields, tokenize the logs and push the data to OMS cloud as JSON object using Ruby language.",
                    "Some of the services are MySQL, Mongo, Apache, VMWare, etc.",
                    "Created database queries which will run every hour using Cron job to push consistent data to OMS.",
                    "Created test query to check for logs on OMS portal and report back to users in case of any failures. "]
            }, {
                "id": 4,
                "projecttype": "edu",
                "project": "LinkedU",
                "projectyear": 2015,
                "projecttech": ["c#", "Mysql", "HTML", "CSS", "Javascript"],
                "projectDescrip": "A web-based LinkedIn app for high school scholars to link with universities and peers. The app targets high school students who are looking to promote themselves to the university communities. It also targets university recruiters for students with high academic standards.",
                "projectresponsiblity": []
            }, {
                "id": 5,
                "projecttype": "edu",
                "project": "Movie Rating Analysis",
                "projectyear": 2014,
                "projecttech": ["HDFS", "MapReduce"],
                "projectDescrip": "Worked on three different datasets that contains more than 2000000 records in unstructured format using Hadoop architecture. The goal here to find out the movie genre which is most liked by the teenagers.",
                "projectresponsiblity": []
            }, {
                "id": 6,
                "projecttype": "edu",
                "project": "7 PM –Restaurant searching website",
                "projectyear": 2014,
                "projecttech": ["Java", "JavaScript", "MySQL", "JSON"],
                "projectDescrip": "7 PM is an online web portal which helps the user to find a restaurant based on zip code and help them to find the direction and weather forecast based on RESTful web services and API from Google maps, Yelp, and Forecast.IO. It also stores the data of the user in the database to make future searches of a user easier.",
                "projectresponsiblity": []
            },
            {
                "id": 7,
                "projecttype": "edu",
                "project": "Internship Registration",
                "projectyear": 2013,
                "projecttech": ["office", "Viso"],
                "projectDescrip": "Designed and analyzed a Software based Internship Registration system by automating the existing manual system.  Major tasks involved requirement gathering; cost benefit analysis; prepared data models using DFD and tested the entire system in all phases of SDLC. ",
                "projectresponsiblity": []
            },
            {
                "id": 8,
                "projecttype": "edu",
                "project": "E-Recruitment Cell",
                "projectyear": 2013,
                "projecttech": ["Java", "JavaScript", "MySQL"],
                "projectDescrip": "E-Recruitment cell is fully integrated Web-based and a central recruitment Process system for organization and student. The main goal was to simplify the recruitment process. In this website job seekers can register themselves online and apply for a job and attend the exam.",
                "projectresponsiblity": []
            },
            {
                "id": 9,
                "projecttype": "edu",
                "project": "OnWheels",
                "projectyear": 2012,
                "projecttech": ["Java", "JavaScript", "MySQL"],
                "projectDescrip": "On Wheels is a web portal for Hyundai Indore organization which helps Hyundai customer to keep the track of their vehicle maintained,  insurance and update them about all the accessories of the registered vehicle. ",
                "projectresponsiblity": []
            }
        ];
    };
    ;
    /* getDetails(): Observable<IProfessional[] > {
         return this._http.get(this._professionalurl)
             .map((response: Response) => <IProfessional[]> response.json())
             .do(data => console.log('All: ' +  JSON.stringify(data)))
             .catch(this.handleError);
     }*/
    ProductService.prototype.getTechs = function () {
        return [
            {
                "id": 1,
                "techtype": "Algorithms",
                "techname": "Data Structure",
                "techrating": 3
            }, {
                "id": 2,
                "techtype": "Development Tool(IDE)",
                "techname": "Visual Studio",
                "techrating": 4
            }, {
                "id": 3,
                "techtype": "Development Tool(IDE)",
                "techname": "Eclipse",
                "techrating": 4
            }, {
                "id": 4,
                "techtype": "Programming Languages",
                "techname": "C#",
                "techrating": 3
            }, {
                "id": 5,
                "techtype": "Programming Languages",
                "techname": "JAVA",
                "techrating": 3
            }, {
                "id": 6,
                "techtype": "Web Technologies",
                "techname": "ASP.Net",
                "techrating": 4
            }, {
                "id": 7,
                "techtype": "Web Technologies",
                "techname": "Bootstrap",
                "techrating": 4
            }, {
                "id": 8,
                "techtype": "Web Technologies",
                "techname": "XML Web Service",
                "techrating": 4.5
            }, {
                "id": 9,
                "techtype": "Databases",
                "techname": "SQL Server",
                "techrating": 3
            }, {
                "id": 10,
                "techtype": "Configuration & Version Control Tools",
                "techname": "GitHub",
                "techrating": 2.6
            }, {
                "id": 11,
                "techtype": "Configuration & Version Control Tools",
                "techname": "Team Foundation Server-TFS",
                "techrating": 3
            }, {
                "id": 12,
                "techtype": "Scripting & Markup Languages",
                "techname": "jQuery",
                "techrating": 4
            }, {
                "id": 13,
                "techtype": "Scripting & Markup Languages",
                "techname": ", JSON",
                "techrating": 4
            }, {
                "id": 14,
                "techtype": "Scripting & Markup Languages",
                "techname": "AngularJS",
                "techrating": 4
            }, {
                "id": 15,
                "techtype": "Scripting & Markup Languages",
                "techname": "HTML5",
                "techrating": 4
            }, {
                "id": 16,
                "techtype": "Scripting & Markup Languages",
                "techname": "JavaScript",
                "techrating": 4
            }];
    };
    /*getTechs(): Observable<any[]> {
        return this._http.get(this._itechUrl)
            .map((response: Response) => <any[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }*/
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    //getDetail(id: number): Observable<any> {
    //  return this.getDetails();
    //  .map((detail: IProfessional[]) => detail.find(a => a.projectyear === id));
    //}
    ProductService.prototype.getProduct = function (id) {
        console.log("magic");
        return this.getProducts()
            .map(function (products) { return products.find(function (p) { return p.productId === id; }); });
    };
    ProductService.prototype.handleError = function (error) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ProductService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map