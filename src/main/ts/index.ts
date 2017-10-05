
import Main from './Main';

Main
    .run(process.argv)
    .then((result)=>{
        if (result.error) {
            console.error(`Exit code ${result.exitCode}. Reason: ${result.errorMessage}`);
            process.exit(result.exitCode);
        } else {
            console.log(result.results);
        }
    })
    .catch((err)=>{
        console.log("UNKNOWN ERROR");
        process.exit(99);
    });

