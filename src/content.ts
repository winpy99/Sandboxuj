/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";
import url from "url";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->
        var év: number = 73;
        var name: string = "JUan Migel Carlos Amigo Esteban";
        var spanyole: boolean = true;
        let spanyolnevek: string[] = ["migel", "carlos", "Francesco"];
        for (var index in spanyolnevek) {
            res.write(spanyolnevek[index] + ",");
        }
        var személy: [number, string, boolean] = [év, name, spanyole];
        for (var index in személy) {
            res.write(személy[index] + ",");
        }
        enum KedvencSörök {
            Ipa = "IPA",
            Apa = "APA",
            Neipa = "NEIPA",
            Wheat = "WHEAT"
        }
        let cucc: string | boolean;
        cucc = true;
        cucc = "Winter IPA";
        res.write(KedvencSörök["Ipa"] + " " + KedvencSörök["Apa"] + " " + KedvencSörök["Neipa"] + " " + KedvencSörök["Wheat"] + " " + cucc);
        let bármi: any[] = ["SZilva", "Porter", false];
        res.write("\n" + bármi);
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
