require('dotenv/config');
const { Client, IntentsBitField, GatewayIntentBits, ButtonBuilder, createMessageComponentCollector, ButtonStyle, ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ComponentType } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const { EmbedBuilder }  = require('discord.js')
const MessageEmbed = require('discord.js').MessageEmbed
const path = require('path');
const { ChannelType } = require('discord.js');

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

new CommandHandler({
  client,
  commandsPath: path.join(__dirname, 'slash-commands'),
  eventsPath: path.join(__dirname, 'events'),
});

const TOKEN = ''; // Coloque seu token do bot aqui
client.login(TOKEN);

autor = 0
function setID(id) {
  autor = id;
}


client.on("interactionCreate", (interaction) => {
  if (interaction.isStringSelectMenu()) {
      if(interaction.customId === "painel_1") {
          let opc = interaction.values[0]
          if (opc === "opc1") {
              
              const modal = new ModalBuilder ({
                  custom_id: `MeuModal-${interaction.user.id}`,
                  title: "Sistema de Pagamentos e renovações",
              });
          
              const favoriteColorInput = new TextInputBuilder({
                  customId: "favoriteColorInput1",
                  label: "Número do Cofre:",
                  style: TextInputStyle.Short,
              });
      
              const hobbiesInput = new TextInputBuilder({
                  customId: "hobbiesInput",
                  label: "Plano:",
                  style: TextInputStyle.Short,
              });
      
              const pergunta3Input = new TextInputBuilder({
                  customId: "pergunta3Input",
                  label: "Comprovante [BML866] (imgur ou lightshoot):",
                  style: TextInputStyle.Short,
              });

              const pergunta4Input = new TextInputBuilder({
                customId: "pergunta4Input",
                label: "Pagamento ou Renovação?",
                style: TextInputStyle.Short,
            });

            
              const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
              const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);
              const threeActionRow = new ActionRowBuilder().addComponents(pergunta3Input);
              const fourActionRow = new ActionRowBuilder().addComponents(pergunta4Input);
                
              modal.addComponents(firstActionRow, secondActionRow, threeActionRow, fourActionRow);
      
              interaction.showModal(modal);
      
              const filter = (modalInteraction) => modalInteraction.customId === `MeuModal-${interaction.user.id}`;

              interaction
              .awaitModalSubmit({ filter, time: 30_000 }) // Tempo para resposta
              .then((modalInteraction) => { 
                const favoriteColorValue = modalInteraction.fields.getTextInputValue("favoriteColorInput1");
                const hobbiesValue = modalInteraction.fields.getTextInputValue("hobbiesInput");
                const pergunta3Value = modalInteraction.fields.getTextInputValue("pergunta3Input");
                const pergunta4Value = modalInteraction.fields.getTextInputValue("pergunta4Input");
                setID(interaction.user)
                const exampleEmbed = new EmbedBuilder()
                .setColor(0x008000)
                .setTitle('Pagamentos e Renovação 👊')
                .setAuthor({ name: 'Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png', url: 'https://discord.js.org' })
                .setDescription(`> **Número do Cofre:** ${favoriteColorValue}
                > **Plano:** ${hobbiesValue}
                > **Comprovante [BML866] (imgur ou lightshoot):** ${pergunta3Value}
                > **Renovação ou Pagamento** ${pergunta4Value}
                > **Responsável: ** ${interaction.user}`)
                .setImage('https://i.imgur.com/BD3OzGb.png')
                .setTimestamp()

                let botao = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                .setCustomId('aceitar_pedido')
                .setLabel("Aceitar")
                .setEmoji('✔')
                .setStyle(ButtonStyle.Success) // Ou qualquer outro estilo aceitável
                );

                let botao2 = new ActionRowBuilder().addComponents(
                  new ButtonBuilder()
                  .setCustomId('recusar_pedido')
                  .setLabel("Recusar")
                  .setEmoji('❌')
                  .setStyle(ButtonStyle.Danger) // Ou qualquer outro estilo aceitável
                  );

                const channel = client.channels.cache.get(`1232069507074490448`);

                if (channel) {
                  // Aqui você cria a embed e a mensagem
                   channel.send({ embeds: [exampleEmbed], components: [botao, botao2] });
  
                } else {
                  console.error('Canal não encontrado.');
                }                
                  modalInteraction.reply({content: `👊`, ephemeral: true})

              })
              
              .catch((error) => {
                  if (error.code === 'InteractionCollectorError') {
                      console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                      // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
                  } else {
                      console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
                  }
                  
                     
              });

          } //FIM DO IF opc1
          else if (opc === "opc2") {
              
            const modal = new ModalBuilder ({
                custom_id: `MeuModal-${interaction.user.id}`,
                title: "Sistema de Senhas",
            });
        
            const favoriteColorInput1 = new TextInputBuilder({
                customId: "favoriteColorInput1",
                label: "Número do Cofre:",
                style: TextInputStyle.Short,
            });
    
            const hobbiesInput1 = new TextInputBuilder({
                customId: "hobbiesInput1",
                label: "Senha para troca:",
                style: TextInputStyle.Short,
            });
  

          
            const firstActionRow1 = new ActionRowBuilder().addComponents(favoriteColorInput1);
            const secondActionRow1 = new ActionRowBuilder().addComponents(hobbiesInput1);
              
            modal.addComponents(firstActionRow1, secondActionRow1);
    
            interaction.showModal(modal);
    
            const filter = (modalInteraction) => modalInteraction.customId === `MeuModal-${interaction.user.id}`;

            interaction
            .awaitModalSubmit({ filter, time: 30_000 }) // Tempo para resposta
            .then((modalInteraction) => { 
              const favoriteColorValue1 = modalInteraction.fields.getTextInputValue("favoriteColorInput1");
              const hobbiesValue1 = modalInteraction.fields.getTextInputValue("hobbiesInput1");
              const exampleEmbed = new EmbedBuilder()
              .setColor(0x008000)
              .setTitle('Registro de Senhas 👊')
              .setAuthor({ name: 'Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png', url: 'https://discord.js.org' })
              .setDescription(`> **Número do Cofre:** ${favoriteColorValue1}
              > **Senha para troca:** ${hobbiesValue1}
              > **Responsável: ** ${interaction.user}`)
              .setImage('https://i.imgur.com/BD3OzGb.png')
              .setTimestamp()

              const channel = client.channels.cache.get(`1232069445413769276`);

              if (channel) {
                // Aqui você cria a embed e a mensagem
                 channel.send({ embeds: [exampleEmbed] });
              } else {
                console.error('Canal não encontrado.');
              }                
                modalInteraction.reply({content: `👊`, ephemeral: true})

            })
            
            .catch((error) => {
                if (error.code === 'InteractionCollectorError') {
                    console.error('O coletor de interações foi encerrado sem receber nenhuma interação dentro do tempo limite.');
                    // Aqui você pode adicionar a lógica para lidar com esse caso, como enviar uma mensagem informando ao usuário que o tempo expirou.
                } else {
                    console.error('Ocorreu um erro durante a espera pela submissão do modal:', error);
                }
                
                   
            });

        } //FIM DO IF opc2
          else if (opc === "opc3") { interaction.reply({content: `Seu painel foi atualizado!`, ephemeral: true})}//FIM DO IF opc3
      } if (!interaction.isButton() || interaction.customId !== "aceitar_pedido") {
        return
      }       
  } else if (interaction.isButton()) {
    if (interaction.customId === "aceitar_pedido") {

      interaction.reply({content: `Aceito`, ephemeral: true})
      const embed = new EmbedBuilder()
      .setColor(0x24af02)
      .setTitle('Registro de Pagamentos 👊')
      .setAuthor({ name: 'Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png', url: 'https://discord.js.org' })
      .setDescription(`> <:money:1141078085161205780> O pagamento de ${autor} foi aprovado por ${interaction.user}`)
      .setImage('https://i.imgur.com/BD3OzGb.png')
      .setTimestamp()



      const channel = client.channels.cache.get(`1232111875399876678`)

      if (channel) {
         channel.send({ embeds: [embed] });
      } else {
        console.error('Canal não encontrado.');
      }

    } else if (interaction.customId === "recusar_pedido") {

      const channel = client.channels.cache.get(`1232111875399876678`)

      if (channel) {

        interaction.reply({content: `Negado`, ephemeral: true})
        const embed = new EmbedBuilder()
        .setColor(0xb31d1d)
        .setTitle('Registro de Pagamentos 👊')
        .setAuthor({ name: 'Black Market', iconURL: 'https://i.imgur.com/2IuQv3m.png', url: 'https://discord.js.org' })
        .setDescription(`> <:Icon_timeout:1144705272699428904> O pagamento de ${autor} foi negado por ${interaction.user}.
        > Caso queira informações, você deve abrir um ticket em <#1135055973615140935>`)
        .setImage('https://i.imgur.com/BD3OzGb.png')
        .setTimestamp()
        channel.send({ embeds: [embed] });
      } else {
        console.error('Canal não encontrado.');
      }  
    }}
})

