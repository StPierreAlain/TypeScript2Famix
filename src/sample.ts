import { Project } from "ts-morph";
const project = new Project();

import * as Famix from "./lib/model/famix";
import * as FamixFile from "./lib/model/file";
import {FamixBaseElement} from "./lib/famix_base_element";
import {FamixMseExporter} from "./lib/famix_mse_exporter";
import { FamixRepository } from './lib/famix_repository';

import * as fs from 'fs';
import * as path from 'path';

try
{
    const sourceFiles = project.addSourceFilesAtPaths("C:/repos/TypeScript2Famix/resources/*.ts");
    
    var fmxRep = new FamixRepository();

    sourceFiles.forEach(file => {
        var fmxFile = new FamixFile.File(fmxRep);
        fmxFile.setName(file.getKindName());
        fmxRep.addElement(fmxFile);

        if (file.getNamespaces().length > 0) {
            var namespace = file.getNamespaces()[0];
            var fmxNamespace = new Famix.Namespace(fmxRep);
            var name = namespace.getName();
            fmxNamespace.setName(name);
            fmxRep.addElement(fmxNamespace);
            if (namespace.getClasses().length > 0) {
                var cls = namespace.getClasses()[0];
                var fmxClass = new Famix.Class(fmxRep);
                var name = cls.getName();
                fmxClass.setName(name);
                fmxRep.addElement(fmxClass);
             }
         }
    });
    var mse = fmxRep.getMSE();
    
    fs.writeFile('sample.mse',mse, (err) => { if (err) throw err; });
}
catch(Error)
{
    console.log(Error.message);
}
