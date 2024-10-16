const { Client, GuildMember } = require('discord.js')

module.exports = {
  name: 'guildMemberRemove',
  /**
   * @param {Client} client
   * @param {GuildMember} member
   */
  execute (member, client) {
    console.log(member)
    const joinedTimestamp = parseInt(member.joinedTimestamp / 1000)
    const createdTimestamp = parseInt(member.user.createdTimestamp / 1000)

    const logsChannel = client.config.LOGS_CHANNEL
    client.channels.cache.get(logsChannel).send({
      embeds: [
        {
          title: 'Member Left',
          description: `**<@${member.user.id}> (${member.user.tag})** left the server.`,
          color: 0xFF0000,
          author: {
            name: member.user.tag,
            icon_url: member.user.displayAvatarURL({ dynamic: true })
          },
          fields: [
            {
              name: 'Joined At',
              value: `<t:${joinedTimestamp}:D> (<t:${joinedTimestamp}:R>)`,
              inline: true
            },
            {
              name: 'Joined Discord',
              value: `<t:${createdTimestamp}:D> (<t:${createdTimestamp}:R>)`,
              inline: true
            }
          ],
          thumbnail: {
            url: `${member.user.displayAvatarURL({ dynamic: true })}`
          },
          footer: {
            text: `ID: ${member.user.id}`
          },
          timestamp: new Date()
        }
      ]
    })
  }
}