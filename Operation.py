

def basic_op(operator, value1, value2):
    cases = {
        '+': value1 + value2,
        '-': value1 - value2,
        '*': value1 * value2,
        '/': value1 / value2,
    }
    return cases[operator]
