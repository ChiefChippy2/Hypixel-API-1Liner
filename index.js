module.exports = Object.fromEntries(Object.entries({getPlayer:'player',getPlayerCount:'playercount',getKey:'key',getLeaderboards:'leaderboards',getGuild:'guild',findGuild:'findGuild',getFriends:'friend',getBoosters:'boosters',getGameCounts:'gameCounts',getRecentGames:'recentGames',getResources:'resources',getStatus:'status',getWatchdogStats:'watchdogstats',getProfile:'skyblock/profile',getProfiles:'skyblock/profiles',getSkyblockNews:'skyblock/news',getBazaar:'skyblock/bazaar',getEndedAuctions:'skyblock/auctions_ended',getAuctions:'skyblock/auctions',getAuction:'skyblock/auction',getRankedSkywars:'player/ranked/skywars'}).map(x=>([x[0], async (args)=> await (require('node-fetch'))('https://api.hypixel.net/'+x[1]+'?'+Object.entries({key:process?.env?.KEY, ...args}).map(x=>`${x[0]}=${x[1]}`).join('&')).then(r=>r.json())])))