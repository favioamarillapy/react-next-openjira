import { useContext, useState } from 'react'

import { AddOutlined, CloseOutlined, SaveOutlined } from '@mui/icons-material'
import { Box, Button, TextField } from '@mui/material'

import { EntryContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

export const EntryForm = () => {

  const { isAdding, setIsAdding } = useContext(UIContext)

  const { addEntry } = useContext(EntryContext)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)


  const onTextChange = (e) => {

    setInputValue(e.target.value)
  }

  const onSave = () => {

    if (inputValue.length == 0) return

    addEntry(inputValue)
    setTouched(false)
    setInputValue('')
    setIsAdding(false)
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>

      {
        !isAdding ? (

          <Button
            variant="outline"
            color="gradient"
            startIcon={<AddOutlined />}
            onClick={() => setIsAdding(true)}>
            New Entry
          </Button>

        ) : (

          <>
            <TextField
              fullWidth
              sx={{ marginTop: 1, marginBottom: 1 }}
              placeholder="New entry"
              label="New entry"
              autoFocus
              multiline
              value={inputValue}
              onChange={onTextChange}
              error={inputValue.length <= 0 && touched}
              onBlur={() => setTouched(true)}
            />

            <Box display="flex" justifyContent="space-between">
              <Button
                variant="outline"
                color="gradient"
                startIcon={<CloseOutlined />}
                onClick={() => setIsAdding(false)}>
                Cancelar
              </Button>
              <Button
                variant="outline"
                color="gradient"
                startIcon={<SaveOutlined />}
                onClick={onSave}
              >
                Save
              </Button>
            </Box>
          </>

        )
      }
    </Box>
  )
}
