var NewsGuardianConfig = {
    /**
     * Default list of highlighted domains
     */
    DOMAINS: [
        "100percentfedup.com",
        "21stcenturywire.com",
        "70news.wordpress.com",
        "800whistleblower.com",
        "911blogger.com",
        "911truth.org",
        "abcnews.com.co",
        "abreureport.com",
        "activistpost.com",
        "addictinginfo.org",
        "afa.net",
        "agoracosmopolitan.com",
        "allnewspipeline.com",
        "alt-market.com",
        "alternativenewsproject.org",
        "alternet.org",
        "americablog.com",
        "americanfreepress.net",
        "americannews.com",
        "americannewsx.com",
        "americaslogicalconservative.com",
        "americasvoice.org",
        "amplifyingglass.com",
        "angrywhitedude.com",
        "anonhq.com",
        "anonnews.co",
        "antiwar.com",
        "article107news.com",
        "associatedmediacoverage.com",
        "barrychamish.com",
        "beforeitsnews.com",
        "beingliberal.tumblr.com",
        "bettybowers.com",              // satire
        "bigamericannews.com",
        "bigpzone.com",
        "bipartisanreport.com",
        "bizpacreview.com",
        "bizstandardnews.com",
        "blacklistednews.com",
        "blog.world-mysteries.com",
        "bluelivesmatter.blue",
        "bluenationreview.com",
        "bobsslackinanarchy.ru",
        "boilingfrogspost.com",
        "bongonews.com",
        "breaking911.com",
        "breitbart.com",
        "bunkerville.wordpress.com",
        "burrardstreetjournal.com",
        "cabaltimes.com",
        "callthecops.net",
        "cap-news.com",
        "cbsnews.com.co",
        "christianitytoday.com",
        "christopherketcham.com",
        "christwire.org",
        "chronicle.su",
        "chuckcallesto.blogspot.com",
        "civictribune.com",
        "clashdaily.com",
        "clickhole.com",                // satire
        "coasttocoastam.com",
        "colemanluck.net",
        "collective-evolution.com",
        "collectivelyconscious.net",
        "concernedwomen.org",
        "consciouslifenews.com",
        "consciouslyenlightened.com",
        "conservapedia.com",
        "conservative101.com",
        "conservativeoutfitters.com",
        "conservativetribune.com",
        "conspiracytheorist.com.au",
        "conspiracywire.com",
        "corproject.com",
        "countdowntozerotime.com",
        "counterpsyops.com",
        "crazed.com",
        "creambmp.com",
        "crooksandliars.com",
        "crossroad.to",
        "cryptogon.com",
        "cryptozoologynews.com",
        "dailybuzzlive.com",
        "dailycaller.com",
        "dailycurrant.com",
        "dailymail.co.uk",
        "dailymediabuzz.com",
        "dailynewsbin.com",
        "dailystar.co.uk",
        "dailystormer.com",
        "dailywire.com",
        "davidicke.com",
        "dcclothesline.com",
        "dcgazette.com",
        "ddsdtv.blogspot.com",
        "demyx.com",
        "derfmagazine.com",
        "disclose.tv",
        "doctoroz.com",
        "donaldtrumpnews.co",
        "donotlink.com",
        "dprogram.net",
        "drphil.com",
        "drudgereport.com.co",
        "drudgereport.com",
        "duffelblog.com",
        "duhprogressive.com",
        "eagleforum.org",
        "educate-yourself.org",
        "elitereaders.com",
        "embols.com",
        "empireherald.com",
        "empirenews.net",
        "empiresports.co",
        "endingthefed.com",
        "enduringvision.com",
        "enenews.com",
        "eutimes.net",
        "ewao.com",
        "examiner.com",
        "exopolitics.org",
        "express.co.uk",
        "federalistpress.com",
        "fixedearth.com",
        "foodbabe.com",
        "forbes.com",
        "fprnradio.com",
        "freerepublic.com",
        "freewoodpost.com",
        "fromthetrenchesworldreport.com",
        "geoengineeringwatch.org",
        "globalassociatednews.com",
        "globalresearch.ca",
        "gmmuk.com",
        "godlikeproductions.com",
        "godvine.com",
        "gomerblog.com",
        "goroadachi.com",
        "gotnews.com",
        "govtslaves.info",
        "greenlifes.net",
        "greenmedinfo.com",
        "greenvillegazette.com",
        "guardianlv.com",
        "gulagbound.com",
        "hangthebankers.com",
        "healthimpactnews.com",
        "healthiswealthofheart.com",
        "healthmagazine365.com",
        "healthy-holistic-living.com",
        "healthyandnaturallife.com",
        "henrymakow.com",
        "hiduth.com",
        "humansarefree.com",
        "huzlers.com",
        "iceagenow.info",
        "ifyouonlynews.com",
        "ijreview.com",
        "ilovemyfreedom.org",
        "in5d.com",
        "indecisionforever.com",
        "independenceday.pro",
        "indian-skeptic.org",
        "indiansceptic.in",
        "informationclearinghouse.info",
        "infowars.com",
        "inquisitr.com",
        "intellihub.com",
        "investmentresearchdynamics.com",
        "itaglive.com",
        "jewishcrimenetworkdid911.blogspot.com.au",
        "jewsnews.co.il",
        "jonesreport.com",
        "kendoc911.files.wordpress.com",
        "kronostimes.com",
        "lanterns.buzz",
        "larouchepub.com",
        "legitgov.org",
        "letsrollforums.com",
        "lewrockwell.com",
        "liberalamerica.org",
        "liberaldarkness.com",
        "libertyhangout.org",
        "libertymovementradio.com",
        "libertynews.com",
        "libertytalk.fm",
        "libertyunyielding.com",
        "libertyvideos.org",
        "lifezette.com",
        "lightlybraisedturnip.com",
        "livefreelivenatural.com",
        "madcowprod.com",
        "mediafetcher.com",
        "mediamass.net",
        "mediaroots.org",
        "mercola.com",
        "metapedia.org",
        "mindbodygreen.com",
        "mrconservative.com",
        "msnbc.com.co",
        "msnbc.website",
        "mufon.com",
        "mufoncanada.com",
        "mycatbirdseat.com",
        "nahadaily.com",
        "nationalreport.net",
        "nationaltribune.com",
        "naturalblaze.com",
        "naturalnews.com",
        "nbc.com.co",
        "ncscooper.com",
        "neomongolianewsnetwork.com",
        "newcenturytimes.com",
        "news.bfnn.co.uk",
        "newsbiscuit.com",
        "newsbusters.org",
        "newshounds.us",
        "newslo.com",
        "newsmutiny.com",
        "newsthump.com",
        "newswatch28.com",
        "newswatch33.com",
        "newswire-24.com",
        "nodisinfo.com",
        "northcrane.com",
        "notallowedto.com",
        "now8news.com",
        "nowtheendbegins.com",
        "oathkeepers.org",
        "occupydemocrats.com",
        "onion.com",                // satire
        "onionstudios.com",         // satire
        "opednews.com",
        "openminds.tv",
        "oppositionnews.org",
        "other98.com",
        "p4rgaming.com",
        "pafamily.org",
        "pakalertpress.com",
        "palmerreport.com",
        "patriotaction.net",
        "philosophers-stone.co.uk",
        "playground.plus",
        "pointandclickbait.com",
        "politicalblindspot.com",
        "politicalears.com",
        "politicalgarbagechute.com",
        "politicops.com",
        "politicususa.com",
        "pravda.ru",
        "presstv.ir",
        "prevention.com",
        "prisonplanet.com",
        "prisonplanet.tv",
        "private-eye.co.uk",
        "projectveritas.com",
        "propagandamatrix.com",
        "rawforbeauty.com",
        "rawstory.com",
        "react365.com",
        "real-people-stories.pw",
        "realfarmacy.com",
        "realnewsrightnow.com",
        "reason.com",
        "rebeldietitian.us",
        "redflagnews.com",
        "redstate.com",
        "reductress.com",
        "rense.com",
        "reportquickly.com",
        "republicreport.org",
        "responsibletechnology.org",
        "returnofkings.com",
        "revelation13.net",
        "rexresearch.com",
        "rightwingnews.com",
        "rightwingwatch.org",
        "rilenews.com",
        "rinf.com",
        "rockcitytimes.com",
        "ronpaulinstitute.org",
        "rooshv.com",
        "rstreet.org",
        "rt.com",
        "russiainyourface.com",
        "satiratribune.com",
        "scrappleface.com",
        "secretsofthefed.com",
        "seeker401.wordpress.com",
        "septemberclues.info",
        "shareonfb.com",
        "shockingtimes.co.uk",
        "shtfplan.com",
        "smoloko.com",
        "sott.net",
        "southideas.net",
        "spiritlibrary.com",
        "sportspickle.com",
        "sputniknews.com",
        "starwipe.com",
        "stevequayle.com",
        "stj911.org",
        "stormfront.org",
        "stridentconservative.com",
        "stubhillnews.com",
        "submediant.com",
        "subvertednation.net",
        "superstation95.com",
        "syruptrap.ca",
        "tarpley.net",
        "the-daily.buzz",
        "theantimedia.org",
        "theblaze.com",
        "thecommonsenseshow.com",
        "thecontroversialfiles.net",
        "thedailymash.co.uk",
        "thedailypixel.com",
        "thedailysheeple.com",
        "thedime.ca",
        "theepochtimes.com",
        "thefederalist-gary.blogspot.com",
        "thefederalist.com",
        "thefederalistpapers.org",
        "thefreethoughtproject.com",
        "thegatewaypundit.com",
        "thegoodsurvivalist.com",
        "thehardtimes.net",
        "theinsider.org",
        "thelapine.ca",
        "thelastamericanvagabond.com",
        "thelastgreatstand.com",
        "themindunleashed.org",
        "thenewamerican.com",
        "thenewsnerd.com",
        "theonion.com",
        "thepeoplescube.com",
        "theracketreport.com",
        "therealnews.com",
        "therightplanet.com",
        "therightscoop.com",
        "therundownlive.com",
        "thesciencepost.com",
        "theshovel.com.au",
        "thesleuthjournal.com",
        "thespiritscience.net",
        "thespoof.com",
        "thesun.co.uk",
        "thetruthseeker.co.uk",
        "theunhivedmind.com",
        "theuspatriot.com",
        "thinkprogress.org",
        "tomatobubble.com",
        "topekasnews.com",
        "topinfopost.com",
        "topsecretwriters.com",
        "totalfratmove.com",
        "tradyouth.org",
        "truth-out.org",
        "truthalerts.com",
        "truthandaction.org",
        "truthbroadcastnetwork.com",
        "truthcdm.com",
        "truthfrequencyradio.com",
        "truthstreammedia.com",
        "tvnewslies.org",
        "tvoinews.com",
        "twitchy.com",
        "ufocasebook.com",
        "ufointernationalproject.com",
        "ufosonline.blogspot.com.br",
        "unconfirmedsources.com",
        "undergroundhealth.com",
        "unreddit.com",
        "upworthy.com",
        "usahitman.com",
        "usasupreme.com",
        "usuncut.com",
        "vdare.com",
        "veteranstoday.com",
        "vigilantcitizen.com",
        "voltairenet.org",
        "wakeup-world.com",
        "wakingtimes.com",
        "wanttoknow.info",
        "watch-unto-prayer.org",
        "waterfordwhispersnews.com",
        "wattsupwiththat.com",
        "waykiwayki.com",
        "weeklyworldnews.com",
        "westernjournalism.com",
        "whatdoesitmean.com",
        "whatreallyhappened.com",
        "whatsupic.com",
        "whistleblower411.com",
        "whitehonor.com",
        "whowhatwhy.org",
        "whydontyoutrythis.com",
        "winningdemocrats.com",
        "witscience.org",
        "wnd.com",
        "worldnewsdailyreport.com",
        "worldtruth.tv",
        "yournewswire.com",
        "zerocensorship.com",
        "zerohedge.com",
        "zonnews.com",
        "zootfeed.com",
        // "mirror.co.uk",
        // "utm_hp_ref=satire",
        // ".rt.com",
        // "borowitz-report",
        // "dailykos.com",
        // "foxnews.com",
        // "fxn.ws",
    ]
};
