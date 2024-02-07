import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from '../../../@/components/ui/context-menu'

import { ArrowLeftToLine, FilePlus, Pencil, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tableRowsData } from '../../data/tableRows.data'
import styles from './Dictionary.module.scss'
import DialogWindow from '../../components/ui/DialogWindow/DialogWindow'
import { useState } from 'react'

const Dictionary = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('Create new file')
  const [buttonText, setButtonText] = useState<string>('Create')
  const [description, setDescription] = useState<string>(
    'Write word and translation'
  )

  const handleOpenEditWindow = () => {
    setTitle('Edit file')
    setButtonText('Save')
    setDescription('Change world or translation')
    setOpen(!open)
  }

  const handleOpenCreateWindow = () => {
    setTitle('Create new file')
    setButtonText('Save')
    setDescription('Write word and translation')
    setButtonText('Create')
    setOpen(!open)
  }
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeftToLine className={styles['icon-back']} />
          </Link>
          <h2>Programming Terms</h2>
        </div>
        <div className={styles.utils}>
          <FilePlus
            onClick={() => handleOpenCreateWindow()}
            size={30}
            className={styles.icon}
          />
        </div>
      </header>
      <main className={styles.body}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>Word</th>
              <th>Translation</th>
            </tr>
            {tableRowsData.map((el) => (
              <tr>
                <ContextMenu>
                  <ContextMenuTrigger>
                    <td className={styles.word}>{el.word}</td>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="rounded-md px-[3px] py-[4px] bg-sage">
                    <div className="w-[160px] cursor-pointer flex justify-center flex-col gap-y-1">
                      <ContextMenuItem
                        onClick={() => handleOpenEditWindow()}
                        className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1"
                      >
                        <span className="flex items-center">
                          <Pencil size={15} />
                          Edit
                        </span>
                        <ContextMenuShortcut>Shift + D</ContextMenuShortcut>
                      </ContextMenuItem>
                      <ContextMenuItem className=" hover:opacity-70 transition-all text-background flex justify-between items-center px-1">
                        <span className="flex items-center">
                          <Trash2 size={15} />
                          Delete
                        </span>
                        <ContextMenuShortcut>Shift + R</ContextMenuShortcut>
                      </ContextMenuItem>
                    </div>
                  </ContextMenuContent>
                </ContextMenu>
                <td className={styles.translation}>{el.translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <DialogWindow
        isOpen={open}
        setOpen={setOpen}
        type="words"
        buttonText={buttonText}
        description={description}
        firstInputValue="Word :"
        secondInputValue="Translation :"
        title={title}
      />
    </section>
  )
}

export default Dictionary
