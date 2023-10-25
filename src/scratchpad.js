<table class="tftable" border="1">
    <tr>
        <th>Name</th>
        <th>Power</th>
        <th>Accuracy</th>
        <th>PP</th>
        <th>Type</th>
        <th>Damage Class</th>
        <th>Effect</th>
    </tr>
    <tr>
    {moves && moves.slice(0, 150).map((move) => (
        <td key={move.move.name}>{move.move.name && move.move.name.name}</td>
        ))}
        {power && power.map((power) => (
        <td key={move.move.power}>{move.move.power && move.move.power.name}</td>
        ))}
        {accuracy && accuracy.map((accuracy) => (
        <td key={move.move.accuracy}>{move.move.accuracy && move.move.accuracy.name}</td>
            ))}
        {pp && pp.map((pp) => (
        <td key={move.move.pp}>{move.move.pp && move.move.pp.name}</td>
            ))}
        {type && type.map((type) => (
        <td key={move.move.type}>{move.move.type && move.move.type.name}</td>
            ))}
        {damage_class && damage_class.map((damage_class) => (
        <td key={move.move.damage_class}>{move.move.damage_class && move.move.damage_class.name}</td>
            ))}
        {effect && effect.map((effect) => (
        <td>{move.move.effect_entries.[].effect}</td>
            ))}
    </tr>
</table>