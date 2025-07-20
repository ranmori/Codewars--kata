

def tower_builder(n):
    # build here
    tower = []
    for i in range(n):
        space= ' ' * (n - i - 1)
        star = '*' * (2 * i + 1)
        tower.append(space + star + space)
    return tower
