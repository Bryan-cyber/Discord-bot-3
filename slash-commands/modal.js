const { Client, GatewayIntentBits, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, PermissionFlagsBits } = require('discord.js')
const { EmbedBuilder }  = require('discord.js')

const execute = (bot, msg, arg) => {
    const embed = new MessageEmbed()
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        // ...
    ]
});

module.exports = {
    run: async ({ interaction }) => {
        if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) { 
            interaction.reply({ content: `Você não possui permissão!`, ephemeral: true })
        }else {
        
        const painel = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('painel_1')
                .setPlaceholder('Clique')
                .addOptions(
                    {
                        label: '💲 Pagamento e Renovação',
                        description: 'Solicite o contrato de um plano de seu agrado!',
                        value: 'opc1',
                    },

                    {
                        label: '🔧 Troca de Senha',
                        description: 'Solicite a troca de senha do seu cofre!',
                        value: 'opc2',
                    },

                    {
                        label: '📝Limpar Menu',
                        description: 'Clique para limpar o menu e selecionar outra opção',
                        value: 'opc3',
                    }
                )
        );

        const exampleEmbed = new EmbedBuilder()
        .setColor(0x000000)
        .setTitle('<:VerificadoVerde:1144705214780280896> Bem-Vindo(a) a Central de Clientes do **Black Market**')
        .setAuthor({ name: 'Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png', url: 'https://discord.js.org' })
        .setDescription(`> <:icons_text1:1141790770748207235> Utilize as opções abaixo para:\n\n > <:money:1141078085161205780> Realizar sua renovação ou pagamento. \n\n> <:retweettt:1136054479662362624> Trocas de senhas *só podem ser requisitadas a cada 15 dias!*`)
        .setImage('https://i.imgur.com/BD3OzGb.png')
        .setTimestamp()
        .setFooter({ text: 'Atenciosamente, Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png' });
        interaction.channel.send({ embeds: [exampleEmbed], components: [painel]});     
    }},

    data: {
        name: "registro",
        description: "Mostrar Registros"
    }
};

