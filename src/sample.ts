import { Project } from "ts-morph";
import {FamixBaseElement, FamixMseExporter, FamixRepository} from "famix"

const project = new Project();
  
try
{
    const sourceFiles = project.addSourceFilesAtPaths("E:/Scoala/MGL843/TP/TypescriptExample/src/*.ts");

    const sourceFile = project.getSourceFileOrThrow("hello.ts");
    
    const hasClasses = sourceFile.getClasses().length > 0;
    const interfaces = sourceFile.getInterfaces().length > 0;

    // person interface
    const personInterface = sourceFile.getInterface("Person")!;
    personInterface.isDefaultExport(); // returns true
    var name=personInterface.getName(); // returns "Person"
    var properties=personInterface.getProperties(); // returns the properties
    var prop=properties.length;
    console.log(prop);
}
catch(Error)
{
    console.log(Error.message);
}
