{JFrame, JButton} = javax.swing

main = ->
  frame = new JFrame('Hello World!')
  button = new JButton('Bye bye')
  button.addActionListener (e) ->
    system.exit(); return
  frame.add 'Center', button
  frame.setSize 300, 300
  frame.visible = true
  return

main() if require.main is module
