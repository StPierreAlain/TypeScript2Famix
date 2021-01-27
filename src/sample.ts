import { Project } from "ts-morph";
const project = new Project();
  
try
{
    const sourceFiles = project.addSourceFilesAtPaths("C:/repos/TypeScript2Famix/resources/*.ts");
    const sourceFile = project.getSourceFileOrThrow("Wall.ts");
    //const hasClasses = sourceFile.getClasses().length > 0;
    var namespaces = sourceFile.getNamespaces();
    var namespaceName = namespaces[0].getName();
    console.log(namespaces.length);
}
catch(Error)
{
    console.log(Error.message);
}
