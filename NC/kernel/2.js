INIT.CPU   = real-mode
INIT.MEM   = detect(0x413)
INIT.STACK = set(0x9000)
INIT.DISK  = BIOS.INT13.enable
INIT.VIDEO = BIOS.INT10.textmode(03h)
