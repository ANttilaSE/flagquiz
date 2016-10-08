<?php 

use Phalcon\Db\Column;
use Phalcon\Db\Index;
use Phalcon\Db\Reference;
use Phalcon\Mvc\Model\Migration;

/**
 * Class QuizCategoryMigration_100
 */
class QuizCategoryMigration_100 extends Migration
{
    /**
     * Define the table structure
     *
     * @return void
     */
    public function morph()
    {
        $this->morphTable('quiz_category', [
                'columns' => [
                    new Column(
                        'quiz_id',
                        [
                            'type' => Column::TYPE_INTEGER,
                            'unsigned' => true,
                            'notNull' => true,
                            'size' => 10,
                            'first' => true
                        ]
                    ),
                    new Column(
                        'category_id',
                        [
                            'type' => Column::TYPE_INTEGER,
                            'unsigned' => true,
                            'notNull' => true,
                            'size' => 10,
                            'after' => 'quiz_id'
                        ]
                    )
                ],
                'indexes' => [
                    new Index('PRIMARY', ['quiz_id', 'category_id'], 'PRIMARY'),
                    new Index('fk_question_category_category1_idx', ['category_id'], null)
                ],
                'references' => [
                    new Reference(
                        'fk_question_category_category1',
                        [
                            'referencedSchema' => 'quiz',
                            'referencedTable' => 'category',
                            'columns' => ['category_id'],
                            'referencedColumns' => ['id'],
                            'onUpdate' => 'NO ACTION',
                            'onDelete' => 'NO ACTION'
                        ]
                    ),
                    new Reference(
                        'fk_question_category_quiz1',
                        [
                            'referencedSchema' => 'quiz',
                            'referencedTable' => 'quiz',
                            'columns' => ['quiz_id'],
                            'referencedColumns' => ['id'],
                            'onUpdate' => 'NO ACTION',
                            'onDelete' => 'NO ACTION'
                        ]
                    )
                ],
                'options' => [
                    'TABLE_TYPE' => 'BASE TABLE',
                    'AUTO_INCREMENT' => '',
                    'ENGINE' => 'InnoDB',
                    'TABLE_COLLATION' => 'latin1_swedish_ci'
                ],
            ]
        );
    }

    /**
     * Run the migrations
     *
     * @return void
     */
    public function up()
    {

    }

    /**
     * Reverse the migrations
     *
     * @return void
     */
    public function down()
    {

    }

}
