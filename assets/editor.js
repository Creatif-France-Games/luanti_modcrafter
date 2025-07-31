var project = {name: "", items: []};


// As of 22nd of August 2015, in minetest_game
var minetest_items = ["default:cactus", "default:copper_lump", "dye:violet", "default:pick_diamond", "default:bronze_ingot", "stairs:stair_brick", "default:clay_brick", "default:rail", "default:grass_4", "air", "default:mese_crystal_fragment", "default:pick_mese", "xpanes:bar_9", "default:junglewood", "default:gold_lump", "xpanes:pane_5", "dye:pink", "stairs:stair_junglewoodupside_down", "default:mese", "xpanes:bar_7", "default:axe_wood", "xpanes:bar", "stairs:slab_woodupside_down", "default:obsidian_shard", "farming:wheat_3", "default:paper", "flowers:dandelion_yellow", "stairs:slab_desert_stone", "doors:door_wood_t_2", "default:coal_lump", "farming:wheat_6", "screwdriver:screwdriver3", "farming:hoe_stone", "doors:door_wood_b_2", "default:leaves", "default:diamond", "stairs:slab_brick", "default:wood", "farming:wheat_2", "wool:pink", "default:torch", "xpanes:bar_14", "default:sword_stone", "stairs:stair_desert_cobbleupside_down", "xpanes:pane_9", "default:book", "default:chest_locked", "farming:wheat", "default:lava_source", "tnt:tnt", "default:bookshelf", "xpanes:pane_11", "farming:wheat_5", "wool:brown", "stairs:slab_stonebrickupside_down", "default:glass", "farming:desert_sand_soil_wet", "default:dry_shrub", "default:mese_crystal", "xpanes:pane_12", "dye:dark_grey", "dye:brown", "dye:dark_green", "default:dirt_with_snow", "default:cloud", "default:snow", "stairs:stair_brickupside_down", "farming:bread", "default:shovel_diamond", "xpanes:bar_4", "default:papyrus", "default:chest", "dye:yellow", "xpanes:bar_10", "doors:door_obsidian_glass_b_1", "wool:red", "default:stone_with_gold", "wool:violet", "stairs:stair_desert_stoneupside_down", "dye:blue", "farming:hoe_steel", "dye:grey", "dye:orange", "wool:yellow", "xpanes:pane_10", "default:furnace", "dye:green", "default:furnace_active", "wool:black", "default:grass_3", "wool:dark_green", "default:desert_cobble", "xpanes:pane_7", "default:iron_lump", "default:axe_diamond", "default:stone_with_mese", "dye:white", "screwdriver:screwdriver1", "dye:cyan", "stairs:slab_wood", "default:gravel", "farming:seed_wheat", "farming:soil_wet", "default:fence_wood", "default:axe_mese", "stairs:stair_wood", "doors:door_steel_b_2", "default:pick_steel", "xpanes:bar_13", "default:nyancat_rainbow", "wool:dark_grey", "xpanes:pane_4", "flowers:dandelion_white", "bucket:bucket_lava", "farming:wheat_4", "default:water_flowing", "default:mossycobble", "stairs:slab_desert_stoneupside_down", "farming:hoe_wood", "ignore", "default:coalblock", "doors:door_obsidian_glass", "xpanes:bar_5", "default:bronzeblock", "bucket:bucket_empty", "default:stone_with_diamond", "xpanes:bar_11", "doors:door_wood_b_1", "doors:door_glass_b_2", "default:grass_5", "tnt:boom", "farming:soil", "default:grass_2", "stairs:slab_sandstonebrick", "doors:door_glass_t_1", "default:clay_lump", "farming:cotton_4", "xpanes:bar_8", "xpanes:bar_12", "xpanes:bar_1", "default:sandstone", "farming:cotton", "default:obsidian", "xpanes:pane_3", "default:shovel_stone", "default:copper_ingot", "default:sword_diamond", "vessels:steel_bottle", "default:stick", "screwdriver:screwdriver4", "farming:hoe_mese", "default:pick_wood", "farming:cotton_1", "doors:door_glass", "farming:hoe_bronze", "default:pick_bronze", "doors:door_glass_t_2", "wool:white", "default:copperblock", "default:obsidian_glass", "default:snowblock", "default:nyancat", "xpanes:bar_15", "default:sword_bronze", "default:brick", "stairs:stair_desert_cobble", "farming:wheat_7", "farming:wheat_8", "farming:cotton_2", "farming:cotton_3", "default:ladder", "stairs:stair_stone", "bones:bones", "default:cobble", "bucket:bucket_water", "doors:trapdoor_open", "default:pick_stone", "doors:trapdoor", "stairs:stair_desert_stonebrickupside_down", "default:sandstonebrick", "default:shovel_bronze", "default:shovel_steel", "wool:green", "stairs:stair_junglewood", "default:stone_with_iron", "stairs:slab_stoneupside_down", "doors:door_glass_b_1", "farming:cotton_7", "farming:wheat_1", "doors:door_steel_t_2", "default:clay", "doors:door_steel_t_1", "default:junglesapling", "farming:hoe_diamond", "default:desert_sand", "doors:door_steel", "default:stone_with_coal", "default:axe_stone", "farming:cotton_6", "xpanes:pane_8", "stairs:stair_sandstonebrick", "flowers:tulip", "xpanes:pane", "flowers:geranium", "default:grass_1", "tnt:gunpowder", "stairs:stair_stonebrick", "default:axe_bronze", "default:gold_ingot", "stairs:slab_junglewoodupside_down", "farming:cotton_8", "doors:door_obsidian_glass_b_2", "xpanes:pane_15", "stairs:slab_sandstonebrickupside_down", "stairs:stair_stonebrickupside_down", "default:apple", "flowers:viola", "default:desert_stone", "stairs:slab_sandstoneupside_down", "stairs:slab_sandstone", "default:sword_mese", "stairs:stair_sandstoneupside_down", "stairs:stair_sandstone", "xpanes:bar_3", "default:stone_with_copper", "default:sword_steel", "default:ice", "stairs:slab_brickupside_down", "stairs:stair_sandstonebrickupside_down", "xpanes:pane_1", "default:desert_stonebrick", "default:dirt", "default:shovel_wood", "stairs:slab_desert_stonebrickupside_down", "xpanes:pane_2", "stairs:slab_desert_stonebrick", "doors:door_obsidian_glass_t_2", "stairs:stair_desert_stonebrick", "stairs:slab_desert_cobbleupside_down", "default:sand", "default:axe_steel", "default:water_source", "wool:blue", "stairs:stair_desert_stone", "xpanes:pane_14", "stairs:slab_cobble", "stairs:stair_cobbleupside_down", "stairs:stair_cobble", "doors:door_obsidian_glass_t_1", "default:sword_wood", "tnt:tnt_burning", "default:jungleleaves", "stairs:slab_desert_cobble", "default:dirt_with_grass_footsteps", "stairs:stair_stoneupside_down", "boats:boat", "default:dirt_with_grass", "default:tree", "default:stone", "fire:basic_flame", "vessels:glass_bottle", "default:sapling", "screwdriver:screwdriver2", "tnt:gunpowder_burning", "wool:cyan", "doors:door_wood_t_1", "vessels:glass_fragments", "vessels:drinking_glass", "stairs:slab_junglewood", "doors:door_wood", "default:lava_flowing", "farming:cotton_5", "default:diamondblock", "doors:door_steel_b_1", "dye:black", "wool:orange", "stairs:slab_stone", "farming:seed_cotton", "default:stonebrick", "farming:flour", "stairs:stair_woodupside_down", "default:junglegrass", "default:steel_ingot", "default:sign_wall", "dye:red", "default:shovel_mese", "default:goldblock", "xpanes:pane_6", "default:jungletree", "wool:magenta", "stairs:slab_cobbleupside_down", "flowers:rose", "wool:grey", "xpanes:bar_6", "xpanes:bar_2", "xpanes:pane_13", "farming:desert_sand_soil", "dye:magenta", "default:steelblock", "unknown", "screwdriver:screwdriver", "stairs:slab_stonebrick", "default:aspen_tree", "default:aspen_leaves", "default:aspen_sapling", "default:pine_tree", "default:pine_needles", "default:pine_sapling", "default:acacia_tree", "default:acacia_leaves", "default:acacia_sapling", "default:bush_stem", "default:bush_leaves", "default:bush_sapling", "default:blueberries"];

function displayName(fromTitle)
{
	var tmp = "<p>";
	tmp += "Veuillez entrez un nom de mod. ";
	tmp += "Ce sera le nom du dossier dans lequel ";
	tmp += "le mod sera placé une fois installé.";
	tmp += "</p><p>Veuillez ne pas utiliser le nom d'un mod déjà utilisé. ";
	tmp += "Regardez les forums pour vérifier.<br />";
	tmp += "<span id=\"allowed\">Uniquement les minuscules, nombres et/ou tirets du bas peuvent être utilisés.</span></p>";	
	tmp += "<p>Name: <input id=\"name\" name=\"name\" value=\""+project.name+"\" /></p>";
	tmp += "<p id=\"buttons\"><a id=\"btn_continue_1\" class=\"button long_button\">" + ((fromTitle)?"Suivant":"Changer") + "</a></p>";

	$("#page").html(tmp);
	$("#btn_continue_1").click(function() {
		var input = $("#name").val();
		var reg = /^[a-z0-9_]+$/;
		if (!reg.test(input)) {
			$("#allowed").css("color", "red");
			return;
		}
		project.name = input;
		displayMain();
	});
}

function displayMain()
{
	var tmp = "<p>Sur cette page, vous pouvez créer et supprimer des blocs à ajouter au mod. ";
	tmp += "Lorsque vous avez terminé, cliquez sur suivant. Vous pouvez revenir sur cette page après avoir cliqué sur suivant. ";
	tmp += "Les items sont des objets que vous pouvez déplacer dans votre inventaire. Ils peuvent être des blocs ou ";
	tmp += "des objets non plaçables.</p>";

	tmp += "<p id=\"buttons\" style=\"margin-top: 0;\">";
	tmp += "<a id=\"btn_create_node\" class=\"button\">Créer un bloc</a>";
	tmp += "<a id=\"btn_create_craft\" class=\"button\">Créer une recette</a>";
	tmp += "<a id=\"btn_change_name\" class=\"button\">Changer le nom du mod</a>";
	tmp += "<a id=\"btn_save\" download=\"save.json\" class=\"button\">Sauvegarder</a>";
	tmp += "<a id=\"btn_next\" class=\"button long_button\">Suivant</a>";
	tmp += "</p>";

	tmp += "<h2>Nœuds et objets craftables</h2>";
	tmp += "<table class=\"item_list\"><tr><th style=\"width: 30%;\">Nom</th><th style=\"width: 10%;\">Type</th><th style=\"width: 30%;\">Description</th><th>Actions</th></tr>";

	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			tmp += "<tr><td>" + item.type + "</td><td>" + item.name + "</td><td>" + item.desc + "</td><td>";
			tmp += "<a id=\""+i+"\" class=\"craft_with button\">Ajouter une recette</a> ";
			tmp += "<a id=\""+i+"\" class=\"delete_btn button\">Supprimer</a></td></tr>";
		}
	}
	tmp += "</table>";

	tmp += "<h2>Recettes de craft</h2>";
	tmp += "<table class=\"item_list\"><tr><th style=\"width: 30%;\">Résultat</th><th style=\"width: 50%;\">Recette</th><th>Actions</th></tr>";
	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "craft") {
			tmp += "<tr><td>" + item.output + " (" + item.num + ")</td>";
			tmp += "<td>" + recipePrint(item.recipe) + (item.shapeless?"<br /><i>Sans forme</i>": "") +"</td>";
			tmp += "<td><a id=\""+i+"\" class=\"delete_btn button\">Supprimer</a></td></tr>";
		}
	}
	tmp += "</table>";

	$("#page").html(tmp);
	$("#btn_create_node").click(function() {
		displayNode();		
	});
	$("#btn_create_craft").click(function() {
		displayCraft(null);		
	});
	$("#btn_change_name").click(function() {
		displayName(false);
	});
	$("#btn_next").click(function() {
		displaySetup();
	});
	$("#btn_save").click(function() {
		var data = $.toJSON(project);
		window.open("data:text/json;base64,"+btoa(data));
	});
	$(".craft_with").click(function() {		
		displayCraft(project.items[$(this).attr('id')]);
	});
	$(".delete_btn").click(function() {
		project.items.splice($(this).attr('id'), 1);
		displayMain();
	});
}

function displayNode()
{
	var tmp = "<p>Utilisez cette page pour créer un noeud. C'est ce que l'on appelle un bloc - ";
	tmp += "Un 1x1x1 mètre dans le jeu</p>";

	tmp += "<table id=\"form_table\">";
	function makeRow(name, label, value, note)
	{
		var res = "<tr><td>"+label+":</td><td>"+value+"</td>";
		res += "<td id=\""+name+"_note\">" +  note + "</td></tr>";
		return res;
	}
	function makeRow_Text(name, label, note)
	{
		return makeRow(name, label, "<input type=\"text\" id=\""+name+"\" name=\""+name+"\" />", note);
	}
	tmp += makeRow_Text("name", "Nom", "Le nom du nœud dans le code. Doit être unique. Seules les lettres minuscules, chiffres et/ou caractères underscore peuvent être utilisés.");
	tmp += makeRow_Text("desc", "Description", "Affiché dans les infobulles. Seules les lettres, chiffres et/ou caractères underscore peuvent être utilisés.");

	var select = "<select name=\"slDM\" id=\"digMode\">";
	function selectOP(name, desc, sel)
	{
		return "<option"+(sel?" selected":"") + " value=\""+name+"\">"+name+(desc!=""?(" - "+desc+"."):"")+"</option>";
	}select += selectOP("cracky", "Matériaux résistants mais cassables comme la pierre", true);
	select += selectOP("crumbly", "Terre, sable", false);
	select += selectOP("snappy", "Coupe avec des outils fins", false);
	select += selectOP("choppy", "Coupe avec force (arbres, planches en bois)", false);
	select += selectOP("fleshy", "Êtres vivants comme les animaux et le joueur", false);
	select += selectOP("explody", "Particulièrement sensible aux explosions", false);
	select += selectOP("oddly_breakable_by_hand", "Se casse facilement à la main", false);	
	tmp += makeRow("dig", "Mode de creusage", select, "Le mode de creusage d'un nœud détermine quels outils fonctionnent le mieux et la rapidité pour creuser.");

var select = "<select name=\"slTiles\" id=\"tileMode\">";
select += selectOP("single", "Même texture pour toutes les surfaces", true);
select += selectOP("unique", "Texture unique pour chacune des surfaces", false);
	tmp += makeRow("tiles", "Texture", select, "Choisissez comment vous souhaitez ajouter des images à chacune des surfaces");



	/*var select = "<select name=\"slSD\" id=\"sound\">";
	select += selectOP("none", "", true);
	select += selectOP("custom", "use custom sounds", false);
	select += selectOP("dirt", "use dirt sounds", false);
	select += selectOP("glass", "use glass sounds", false);
	tmp += makeRow("sound", "Sounds", select, "");*/
	tmp += "</table>";
	tmp += "<p id=\"buttons\"><a class=\"button\" id=\"btn_home\">Retour</a> <a class=\"button\" id=\"btn_create\">Créer</a></p>";
	$("#page").html(tmp);
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_create").click(function() {		
		$("#name_note").css("color", "black");
		$("#desc_note").css("color", "black");

		var name = $("#name").val();
		var reg1 = /^[a-z0-9_]+$/;
		if (name=="" || !reg1.test(name)) {
			$("#name_note").css("color", "red");
			return;
		}

		var desc = $("#desc").val();
		var reg2 = /^[\w ]+$/;
		if (desc=="" || !reg2.test(desc)) {
			$("#desc_note").css("color", "red");
			return;
		}

		var digMode = $("#digMode").val();
		var tileMode = $("#tileMode").val();
	
		project.items.push({
			name: name,
			type: "node",
			desc: desc,
			digMode: digMode,			
			tileMode: tileMode
		});

		displayMain();
	});
}

function displayCraft(output)
{
	var tmp = "<p>Entrez les noms des ingrédients de craft dans les cases pour les ajouter.</p>";

	tmp += "<table id=\"craft_table\">\n";
	for (var y = 0; y < 3; y++) {
		tmp += "<tr>";
		for (var x = 0; x < 3; x++) {
			tmp += "<td><input type=\"text\" class=\"craft\" id=\"craft_" +
					x + "_" + y +"\" /></td>";
		}
		tmp += "</tr>\n";
	}
	tmp += "</table>";
	tmp += "<p><input type=\"checkbox\" id=\"shapeless\" name=\"shapeless\"> Sans forme</p>";
		/* | ";
	tmp += "<input type=\"checkbox\" id=\"exact\" name=\"exact\" value=1> Exactly right</p>";*/
	tmp += "<p>Sortie : <input type=\"text\" class=\"craft\" id=\"craft_output\" " +
			(output ? ("value=\"{this}:" + output.name + "\" ") : "") +
			"/> <input id=\"craft_output_n\" type=\"number\" value=1></p>";
	tmp += "<p id=\"buttons\"><a class=\"button\" id=\"btn_home\">Accueil</a> <a class=\"button\" id=\"btn_create\">Créer</a></p>";

	$("#page").html(tmp);
	$(".craft").autocomplete({source: minetest_items});
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_create").click(function() {
		var craft = [];
		for (var y = 0; y < 3; y++) {
			var row = [];
			for (var x = 0; x < 3; x++) {
				var tmp = $("#craft_" + x + "_" + y).val();
				row.push(tmp);
			}
			craft.push(row);
		}
	
		project.items.push({
			output: $("#craft_output").val(),
			num: $("#craft_output_n").val(),
			type: "craft",
			recipe: craft,
			shapeless: $("#shapeless").val()
		});

		displayMain();
	});
	
}

function generateCode()
{
	var res = "-- Mod: " + project.name + "\n";
	res += "-- Code généré par Luanti ModCrafter\n";
	res += "--   ( https://creatif-france-games.github.io/luanti_modcrafter )\n";

	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			res += "\nminetest.register_"+item.type+"(\""+project.name+":"+item.name+"\", {\n";
			res += "\tdescription = \"" + item.desc + "\",\n";		
			res += "\ttiles = {\n";
			if (!item.tileMode || item.tileMode == "" || item.tileMode == "unique") {
				res += "\t\t\""+project.name+"_"+item.name+"_top.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_bottom.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_right.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_left.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_back.png\",\n";
				res += "\t\t\""+project.name+"_"+item.name+"_front.png\"\n";
			} else {
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- top\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- bottom\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- right\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- left\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\", -- back\n";
				res += "\t\t\""+project.name+"_"+item.name+".png\"  -- front\n";
			}
			res += "\t},\n";
			res += "\tgroups = {" + item.digMode + " = 2}\n";
		} else if (item.type == "craft") {
			res += "\nminetest.register_craft({\n";
			res += "\toutput = \"" + item.output + "\",\n";
			if (item.shapeless)
				res += "\ttype = \"shapeless\",\n";
			res += "\trecipe = {\n";
			for (var y = 0; y < 3; y++) {
				res += "\t\t{";
				for (var x = 0; x < 3; x++) {					
					res += "\"" + item.recipe[y][x] + "\"";
					if (x != 2)
						res += ", ";
				}
				res += "},\n";
			}
			res += "\t}\n"; 	
		}
		res += "})\n";	
	}

	return res.replace("{this}", project.name);
}

function recipePrint(recipe)
{
	var res = "<table class=\"recipe\">";
	for (var y = 0; y < 3; y++) {
		res += "<tr>";
		for (var x = 0; x < 3; x++) {					
			res += "<td>" + recipe[y][x] + "</td>";
		}
		res += "</tr>";
	}
	res += "</table>";
	return res;
}

function displaySetup()
{
	var tmp = "<p style=\"margin:0;\">Il y a quelques étapes à suivre avant de continuer. Vous devez ";
	tmp += "créer la structure de dossiers pour un mod.</p>";
	tmp += "<ul style=\"margin-left: 1.5em;\">";
	tmp += "<li>Trouvez <a href=\"http://wiki.minetest.com/wiki/Installing_mods#Install\" target=\"blank\">l'emplacement ";
	tmp += "où vous installez les mods</a>.</li>";
	tmp += "<li>Créez un dossier nommé '" + project.name + "'. Ce sera le dossier de votre mod.</li>";
	tmp += "<li>Dans ce dossier, créez un dossier nommé 'textures'.</li>";
tmp += "<li>Déplacez le init.lua a télécharger ci dessous dans le dossier du mod (pas le textures, le dossier racine).</li>";
	tmp += "</ul>";

	tmp += "<p style=\"margin:0;\"><textarea id=\"code_output\">";
	tmp += generateCode();
	tmp += "</textarea></p>";

	tmp += "<p id=\"buttons\" style=\"margin-top:0;\"><a class=\"button long_button\" id=\"btn_home\">Retour</a> ";
	tmp += "<a class=\"button long_button\" id=\"btn_next\">Suivant</a></p>";
tmp += "<a class=\"button long_button\" id=\"btn_download\">Télécharger init.lua</a> ";
	$("#page").html(tmp);
	$("#btn_home").click(function() {
		displayMain();
	});
	$("#btn_next").click(function() {
		displayTextures();
	});
}


function displayTextures()
{
	function genTile(name, desc, surface)
	{
		return "<tr><td>"+project.name+"_"+name+"_"+surface+".png</td><td>La surface "+surface+" de "+desc+"</td></tr>";
	}

	var tmp = "<p>Vous devez créer les textures suivantes. Enregistrez-les dans le dossier 'textures' ";
	tmp += "du dossier du mod sous les noms de fichiers indiqués.</p>";
	tmp += "<table id=\"item_list\"><tr><th>Nom du fichier</th><th>Description</th></tr>";
	for (var i = 0; i < project.items.length; i++) {
		var item = project.items[i];
		if (item.type == "node") {
			if (!item.tileMode || item.tileMode == "" || item.tileMode == "unique") {
				tmp += genTile(item.name, item.desc, "haut");
				tmp += genTile(item.name, item.desc, "bas");
				tmp += genTile(item.name, item.desc, "droite");
				tmp += genTile(item.name, item.desc, "gauche");
				tmp += genTile(item.name, item.desc, "arrière");
				tmp += genTile(item.name, item.desc, "avant");
			} else {
				tmp += "<tr><td>"+project.name+"_"+item.name+".png</td><td>Utilisée pour toutes les surfaces de "+item.desc+"</td></tr>";
			}		
		}
	}
	tmp += "</table>";

	tmp += "<p>Vous avez terminé !</p>";
	
	tmp += "<p id=\"buttons\"><a class=\"button long_button\" id=\"btn_back\">Retour</a> ";
	tmp += "<a class=\"button long_button\" id=\"btn_home\">Accueil</a></p>";

	$("#page").html(tmp);	
	$("#btn_back").click(function() {
		displaySetup();
	});
	$("#btn_home").click(function() {
		displayMain();
	});
}

$(function() {
	$("#js_message").hide();
	$("#btn_start").show();
	$("#btn_start").click(function() {
		displayName(true);
	});
});
