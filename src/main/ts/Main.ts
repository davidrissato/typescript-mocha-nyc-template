export default class Main {
    static async run(args:string[]) : Promise<{exitCode: number, results: any, error?: boolean, errorMessage?: string}> {
        return {exitCode: 0, results: "OK", error: false};
    }
}