"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let numWins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWin) {
                numWins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResults_1.MatchResult.AwayWin) {
                numWins++;
            }
        }
        return `Team ${this.team} won ${numWins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
