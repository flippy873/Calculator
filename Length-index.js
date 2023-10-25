function convertLength() {
    const value = parseFloat(document.getElementById('value').value);
    const unit = document.getElementById('unit').value;
    let result;
  
    switch (unit) {
      case 'mm':
        result = value / 1000;
        break;
      case 'cm':
        result = value / 100;
        break;
      case 'dm':
        result = value / 10;
        break;
      case 'm':
        result = value;
        break;
      case 'dam':
        result = value * 10;
        break;
      case 'hm':
        result = value * 100;
        break;
      case 'km':
        result = value / 1000;
        break;
      default:
        result = 'Invalid unit';
    }
  
    document.getElementById('result').innerText = `Converted Length: ${result}${unit}`;
  }

