/**
 * Trainer Cards
 *
 * This is where the trainer cards commands
 * are located.
 *
 */

var trainerCards = {
	aananth: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<center><img src=http://play.pokemonshowdown.com/sprites/xyani/charizard-mega-x.gif width="150" length="150"><img src=http://i.imgur.com/afSRAAO.png width="250"><img src=http://play.pokemonshowdown.com/sprites/xyani/charizard-mega-y.gif img width="150" length="150"></center>');
	},
	
        chaarizard: 'char',
        charizard: 'char',
        char: function(target,room,user) {
        	if (!this.canBroadcast()) return;
        	this.sendReply('|html|<div class="char"><center><img src=http://play.pokemonshowdown.com/sprites/xyani/charizard-mega-x.gif height=125><img src=http://i.imgur.com/j1hggX6.png height=90><img src=http://play.pokemonshowdown.com/sprites/xyani/charizard-mega-y.gif height=150></center><br><font size=2><center><font color=red><b>Quote:</b></font> Nobody is perfetc</center></font></div>');
        },

	arsh: 'blakjack',
	arshmalik: 'blakjack',
	blakjack: function (target, room, user) {
	    if (!this.canBroadcast()) return;
	    this.sendReplyBox('<center><img src="http://i.imgur.com/otDPUQU.png"><br><img src="http://i.imgur.com/Wdthjon.png"><img src="http://i.imgur.com/dck9vdP.png"><img src="http://i.imgur.com/5VqH7tF.png"><br><font color="brown"><blink>Ace: Swellow</blink><br><font color="brown">Haters Gonna Hate, Potatotes Gonna Potate But nCrypt\'s Gonna Masturbate');
	},
};

Object.merge(CommandParser.commands, trainerCards);
exports.trainerCards = trainerCards;
