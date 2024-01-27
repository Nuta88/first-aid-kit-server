import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCategoryData1706260606153 implements MigrationInterface {
    name = 'InsertCategoryData1706260606153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO category (name) VALUES
            ('anti-allergic'),
            ('antibiotic'),
            ('antidotes'),
            ('antiseptic'),
            ('antithrombotic'),
            ('bc_brains_activity'),
            ('bc_heard'),
            ('bc_liver'),
            ('bioactive_compounds'),
            ('bronchus'),
            ('cough'),
            ('cystitis'),
            ('ear'),
            ('edema'),
            ('esophagus'),
            ('flue'),
            ('gallbladder'),
            ('headache'),
            ('heard'),
            ('helicobacter_pylori'),
            ('hemorrhoids'),
            ('infection'),
            ('lipid-lowering'),
            ('liver'),
            ('mouth'),
            ('nose'),
            ('painkiller'),
            ('sedative'),
            ('sorbents'),
            ('sore_throat'),
            ('stomach'),
            ('temperature'),
            ('the_lungs'),
            ('vessels'),
            ('vitamins_c'),
            ('vitamins'),
            ('vitamins_b'),
            ('vitamins_b12'),
            ('vitamins_calcium'),
            ('vitamins_d'),
            ('vitamins_e');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM category WHERE name IN (
                                                'anti-allergic', 'antibiotic','antidotes', 'antiseptic',
                                                'antithrombotic', 'bc_brains_activity','bc_heard', 'bc_liver',
                                                'bioactive_compounds', 'bronchus','cough', 'cystitis',
                                                'ear', 'edema','esophagus', 'flue', 'gallbladder', 'headache',
                                                'heard', 'helicobacter_pylori','hemorrhoids', 'infection', 'lipid-lowering',
                                                'liver', 'mouth','nose', 'painkiller', 'sedative', 'sorbents', 'sore_throat',
                                                'stomach', 'temperature','the_lungs', 'vessels', 'vitamins_c', 'vitamins',
                                                'vitamins_b', 'vitamins_b12','vitamins_calcium', 'vitamins_d', 'vitamins_e'
                                               );
        `);    }

}
