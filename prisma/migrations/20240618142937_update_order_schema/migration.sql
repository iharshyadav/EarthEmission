-- AlterTable
ALTER TABLE `order` MODIFY `orders` VARCHAR(191) NOT NULL,
    MODIFY `lastOrder` VARCHAR(191) NOT NULL,
    MODIFY `spent` VARCHAR(191) NOT NULL,
    MODIFY `refunds` VARCHAR(191) NOT NULL;
